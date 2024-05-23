
import { PrismaClient } from "@prisma/client";
import express from "express";

console.log(process.env.DATABASE_URL);

const app = express();
app.use(express.json());

const client = new PrismaClient();

app.get("/", (req, res) => {
    res.json({
        message: "Healthy server"
    })
})
let tr = 1;

app.post("/", async (req, res) => {

    while(tr){
        try {
            await client.user.create({
                data: {
                    email: req.body.email,
                    name: req.body.name
                }
            })
            break;
        } catch (error) {
            console.log(error);
            new Promise((resolve) => {
                setTimeout(resolve, 1000);
            })
            tr--;
        }
    }
    
    res.json({
        message: "Done signing up!"
    })
})

app.listen(3000);