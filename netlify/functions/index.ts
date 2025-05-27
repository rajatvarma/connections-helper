import type { Context } from "@netlify/functions";
import main from "./scrape";

export default async (req: Request, Context: Context) => {

    const responseHeaders:ResponseInit = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Content-Type": "application/json"
        }
    }

    console.log(req.url);
    const responseText = await main(new Date().toISOString().split('T')[0]);
    return new Response(JSON.stringify(responseText), responseHeaders);
}