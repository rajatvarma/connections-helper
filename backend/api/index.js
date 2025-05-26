import main from "./get_todays_answers.js"

export default async function handler(req, res) {
    const query = req.query
    console.log(query)
    let date = ""
    if (query.date && typeof(query.date) == "string") {
        date = query.date
    } else {
        date = new Date().toISOString().split('T')[0];
    }
    const resp = await main(date);
    res.send(JSON.stringify(resp));
}