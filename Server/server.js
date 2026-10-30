import express from 'express'
import 'dotenv/config'
import { chats } from './data/data.js'

const app = express()

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("API is running.........")
})

app.get("/api/chat", (req, res) => {
    res.send(chats)
})

app.get("/api/chat/:id", (req, res) => {
    console.log(req)

    const chat = chats.find((c) => c._id === req.params.id)
    res.send(chat)
})
app.listen(port, () => {
    console.log(`Server is running on PORT ${port} .............`)
})