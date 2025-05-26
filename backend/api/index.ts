import main from "./get_todays_answers.js"
import express from "express";
import cors from "cors"

const server = express();
server.use(cors())
const port = 3000;


export function GET(request: Request) {
    return new Response('Vercel', {
        status: 200
    });
}

// server.get('/', async (req, res) => {
//     const date = new Date();
//     const formattedDate = date.toISOString().split('T')[0];
//     console.log(formattedDate); // Output: yyyy-mm-dd
//     const resp = await main(formattedDate);
//     res.send(JSON.stringify(resp));
// })


// server.get('/history/:date', async (req, res) => {
//     console.log(req.params.date)
//     const resp = await main(req.params.date);
//     res.send(JSON.stringify(resp));
// })


// server.listen(port, () => {
//     console.log("Server running...")
// })