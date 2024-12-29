import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
}).fromJSON({
    type: "service_account",
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
});

const EXPEDITED_ID = process.env.EXPEDITED_ID;
const ROLLING_ID = process.env.ROLLING_ID;

const sheets = google.sheets("v4");

// TODO: rate limiting
const apply = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(JSON.parse(req.body)["row"]);

    const request = {
        spreadsheetId:
            JSON.parse(req.body)["row"][0][0] === "Expedited_App"
                ? EXPEDITED_ID
                : ROLLING_ID,
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
        console.log(response);
        res.status(200).json({ res: "Application successful!" });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            res: "Application unsuccessful, please try again.",
        });
    }
};

export default apply;
