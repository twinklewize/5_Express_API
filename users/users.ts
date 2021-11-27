import express from 'express'

const userRouter = express.Router(); // Router к которому мы можем привязывать все обработчики запросов

userRouter.use((req, res, next) => { // обработчик для обработчика
    console.log('Обработчик users')
    next()
})

userRouter.use('/hello', (req, res, next) => { // обработчик для всех запросов hello обработчика user Router
    console.log('Обработчик users')
    next()
})

userRouter.post('/login', (req, res) => {
    res.send('login')
})

userRouter.post('/register', (req, res) => {
    res.send('register')
})

export { userRouter }