import express from 'express'

// const host = '127.0.0.1'
const port = 8000
const app = express() // создаем приложение

app.get('/hello', (req, res) => {
    // res.send({ success: true }) // отправка json
    // res.status(201).send({ success: true }) // статус код
    // res.status(201).json({ success: true }) // отправка толкьо json
    // res.download('/file_path.pdf', 'New_File_Name.pdf') // передать ссылку на скачиваине
    // res.redirect(301, 'https://example.com') // перенаправляем пользователя на другой сайт
    // res.set('Content-Type', 'text/plain') // вызываем перед методом send, задант тип контента
    // res.append('Warning', 'code') // вызываем перед методом send, добавляет новый кастомный заголовок
    // res.type('application/json') // задаем Content-Type

    // Еще можно:
    // res.location('')
    // res.links({
    //     next: 'sdfsfd'
    // })
    // res.cookie('token', 'sam_token', {
    //     domain: '',
    //     path: '/',
    //     secure: true,
    //     expires: 60000
    // })
    // res.clearCookie('token')
    // res.clearCookie('token', { path })

    res.status(404).end() // вернуть not_found
    res.end()

    // res.send('Привет!')
})


app.listen(port, () => { // нужно чтобы слушать запросы
    console.log(`Сервер запущен на http://localhost:${port}`)
})

