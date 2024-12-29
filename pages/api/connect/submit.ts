import busboy from "busboy";
import { NextApiRequest, NextApiResponse } from "next";
import * as postmark from "postmark";

const submit = async (req: NextApiRequest, res: NextApiResponse) => {
    const mailData: Record<string, any> = {
        firstName: "",
        lastName: "",
        email: "",
        purpose: "",
        message: "",
        upload: {},
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
        mailData.upload.Name = filename;
        mailData.upload.ContentType = mimeType;
        mailData.upload.Content = "";
        const chunks: Buffer[] = [];
        //mailData.upload.encoding = encoding;
        file.on("data", (data) => {
            console.log(`File [${name}] got ${data.length} bytes`);
            chunks.push(data);
            //mailData.upload.Content += data.toString("base64");
        }).on("close", () => {
            console.log(`File [${name}] done`);
            const buffer = Buffer.concat(chunks);
            mailData.upload.Content = buffer.toString("base64");
        });
    });
    bb.on("field", (name, val) => {
        console.log(`Field [${name}]: value: %j`, val);
        mailData[name] = val;
    });
    bb.on("close", async () => {
        console.log("Done parsing form!");
        try {
            const client = new postmark.ServerClient(
                process.env.EMAIL_SERVER ?? ""
            );

            const body: { From: string; Subject: string } & Record<
                string,
                any
            > = {
                From: "k47jiang@watonomous.ca",
                To: "hello@watonomous.ca",
                Subject: `${mailData.firstName} ${mailData.lastName} - ${mailData.purpose}`,
                TextBody: `FROM: ${mailData.email} \n ${mailData.message}`,
                HtmlBody: `<p>FROM: ${mailData.email}</p><br/><p>${mailData.message}</p>`,
            };
            if (mailData.upload && mailData.upload.Content) {
                body.Attachments = [mailData.upload];
            }
            const emailResponse = await client.sendEmail(body);

            console.log(emailResponse);
            res.status(200).json({ res: "Successfully sent email" });
        } catch (e) {
            console.error(e);
            res.status(500).json({ err: "Error sending email" });
        }
    });
    req.pipe(bb);
    // send mail~

    // const mailAccount = await NodeMailer.createTestAccount();
    // const transport = NodeMailer.createTransport({
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     secure: false,
    //     auth: {
    //         user: mailAccount.user,
    //         pass: mailAccount.pass,
    //     },
    // });
    // console.log(mailData);
    // const info = await transport.sendMail({
    //     from: "hello@watonomous.com",
    //     to: "hello@watonomous.com",
    //     subject: `${mailData.firstName} ${mailData.lastName} - ${mailData.purpose}`,
    //     text: `FROM: ${mailData.email} \n ${mailData.message}`,
    //     html: `<p>FROM: ${mailData.email}</p><br/><p>${mailData.message}</p>`,
    //     attachments: [mailData.upload],
    // });

    // console.log(info);
};

export const config = {
    api: {
        bodyParser: false,
    },
};

export default submit;
