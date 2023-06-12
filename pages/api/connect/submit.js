import busboy from "busboy";
import NodeMailer, { createTestAccount } from "nodemailer";

const submit = async (req, res) => {
  const mailData = {
    firstName: "",
    lastName: "",
    email: "",
    purpose: "",
    message: "",
    upload: {
      fileName: "",
      contentType: "",
      encoding: "",
      content: ""
    }
  };
  const bb = busboy({ headers: req.headers });
  bb.on("file", (name, file, info) => {
    const { filename, encoding, mimeType } = info;
    console.log(
      `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
      filename,
      encoding,
      mimeType
    );
    mailData.upload.fileName = filename;
    mailData.upload.contentType = mimeType;
    mailData.upload.encoding = encoding;
    file
      .on("data", (data) => {
        console.log(`File [${name}] got ${data.length} bytes`);
        mailData.upload.content = data;
      })
      .on("close", () => {
        console.log(`File [${name}] done`);
      });
  });
  bb.on("field", (name, val, info) => {
    console.log(`Field [${name}]: value: %j`, val);
    mailData[name] = val;
  });
  bb.on("close", () => {
    console.log("Done parsing form!");
  });
  req.pipe(bb);
  // send mail~

  const mailAccount = await NodeMailer.createTestAccount();
  const transport = NodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: mailAccount.user,
      pass: mailAccount.pass
    }
  });
  console.log(mailData);
  const info = await transport.sendMail({
    from: "hello@watonomous.com",
    to: "hello@watonomous.com",
    subject: `${mailData.firstName} ${mailData.lastName} - ${mailData.purpose}`,
    text: `FROM: ${mailData.email} \n ${mailData.message}`,
    html: `<p>FROM: ${mailData.email}</p><br/><p>${mailData.message}</p>`,
    attachments: [mailData.upload]
  });

  console.log(info);

  res.status(200).json({});
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default submit;
