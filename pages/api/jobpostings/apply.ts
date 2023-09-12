import  { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

const auth = new google.auth.GoogleAuth({
    keyFile: "wato-service-secret.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets("v4");

// TODO: rate limiting
const apply = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(JSON.parse(req.body)["row"]);
    const request = {
        spreadsheetId: "1rfhqVyXvgHpQJYwAN8qGSBlKjLFQCmWraT63AOVx3uA",
        range: "Sheet1!A1:L1",
        valueInputOption: "USER_ENTERED",
        insertDataOption: "OVERWRITE",
        resource: {
            values: JSON.parse(req.body)["row"],
        },
        auth: auth,
    };

    try {
        const response = (await sheets.spreadsheets.values.append(request))
            .data;
        await new Promise((resolve) => setTimeout(resolve, 2000));
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json({ e: (e as object).toString() });
    }
};

export default apply;
