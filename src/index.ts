import express, { Request, Response, NextFunction } from 'express'
import { userRouter } from './users/users.js'

const port = 8000
const app = express()

app.use((req, res, next) => { // глобальный обработчик на все приложение
    console.log('Время', Date.now())
    next()
})

app.get('/hello', (req, res) => {
    throw new Error('Error!!!') // выбросить ошибку
})

app.use('/users', userRouter) // когда пользователь переходит на users, его запросы обрабатывает Router

app.use((err: Error, req: Request, res: Response, next: NextFunction) => { // обработчик ошибки
    console.log(err.message)
    res.status(401).send(err.message)
})

app.listen(port, () => { // нужно чтобы слушать запросы
    console.log(`Сервер запущен на http://localhost:${port}`)
})

