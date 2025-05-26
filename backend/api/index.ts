import main from "./get_todays_answers.cjs"
import type {VercelRequest, VercelResponse} from "@vercel/node"


export default async function handler(req: VercelRequest, res: VercelResponse) {
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