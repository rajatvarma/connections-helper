import type { Context } from "@netlify/functions";
import main from "./scrape";

export default async (req: Request, context: Context) => {

    const responseHeaders:ResponseInit = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Content-Type": "application/json"
        }
    }

    const requestDate = req.url.split("?date=")[1]
    const date = requestDate ? requestDate : new Date().toISOString().split('T')[0];
    console.log(date)
    const responseText = await main(date);
    console.log(responseText);
    return new Response(JSON.stringify(responseText), responseHeaders);
}