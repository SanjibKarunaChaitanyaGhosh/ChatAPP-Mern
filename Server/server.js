import express from 'express'
import 'dotenv/config'
import routes from './routes/userRoutes.js'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
// import { chats } from './data/data.js'

const app = express()

// dataParsing
app.use(express.json())

const port = process.env.PORT || 3000

connectDB()

app.get("/", (req, res) => {
    res.send("API is running.........")
})

// app.get("/api/chat", (req, res) => {
//     res.send(chats)
// })

// app.get("/api/chat/:id", (req, res) => {
//     console.log(req)

//     const chat = chats.find((c) => c._id === req.params.id)
//     res.send(chat)
// })

app.use('/api/user', routes)

// error handling middlewares
app.use(notFound)
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server is running on PORT ${port} .............`)
})