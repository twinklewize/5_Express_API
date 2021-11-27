import express from 'express'

const userRouter = express.Router(); // Router к которому мы можем привязывать все обработчики запросов

userRouter.post('/login', (req, res) => {
    res.send('login')
})

userRouter.post('/register', (req, res) => {
    res.send('register')
})

export { userRouter }