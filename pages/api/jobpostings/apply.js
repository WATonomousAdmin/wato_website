const {google} = require("googleapis");

const auth = new google.auth.GoogleAuth({
    keyFile: "wato-service-secret.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
});

const sheets = google.sheets("v4");

// TODO: rate limiting
const apply = async (req, res) => {
    console.log(JSON.parse(req.body)["row"]);
    const request = {
        spreadsheetId: "1rfhqVyXvgHpQJYwAN8qGSBlKjLFQCmWraT63AOVx3uA",
        range: "Sheet1!A1:L1",
        valueInputOption: "USER_ENTERED",
        insertDataOption: "OVERWRITE",
        resource: {
            values: JSON.parse(req.body)["row"]
        },
        auth: auth
    }

    try {
        const response = (await sheets.spreadsheets.values.append(request)).data;
        res.status(200).json(response);
    } catch (e) {
        res.status(500).json({"e": e.toString()})
    }
}

export default apply;