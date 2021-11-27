import express from 'express'
import { userRouter } from './users/users.js'

const port = 8000
const app = express()

app.get('/hello', (req, res) => {
    res.end()
})

app.use('/users', userRouter) // когда пользователь переходит на users, его запросы обрабатывает Router


app.listen(port, () => { // нужно чтобы слушать запросы
    console.log(`Сервер запущен на http://localhost:${port}`)
})

