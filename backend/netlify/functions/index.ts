import type { Context } from "@netlify/functions";

export default async (req: Request, res: Response) => {
    return new Response("hello world");
}