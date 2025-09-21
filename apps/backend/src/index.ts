import express, { Request, Response } from "express"

const app = express()

app.get('/', (req: Request, res: Response)=>{
    res.json({
        msg: "server is up!"
    })
})

app.get("/test", (req: Request, res: Response)=>{
    res.send("server is working!!")
})


app.listen(8081)