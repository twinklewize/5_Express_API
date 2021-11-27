import express from 'express'

// const host = '127.0.0.1'
const port = 8000
const app = express() // создаем приложение


//all должен быть вызван в начале
app.all('/hello', (req, res, next) => {
    //hel?lo: hello, helo; 
    //hel+lo: hello, hellllo; 
    //hel*lo: helqlo, hello, helerer3r3lo
    //he(la)?lo: helo, helalo
    //regex тоже принимается: /.*a$/ - строка оканчивающаяся на a (вместо '/hello')
    // значит что при любом запросе будет дополнително обработана эта функцию
    console.log('All') // каждый раз выводится в консоль, когда клиент получает ответ от сервера
    next() // next - функция перейдет следующему обработчику
})

const cb = (req, res, next) => { // callback (здесь попадаем сначала в all потом в callback, потом в get)
    console.log('CB')
    next()
}

app.route('/user')
    .get('/hello', (req, res) => {
        res.send('Привет GET!')
    })
    .post('/hello', (req, res) => {
        res.send('Привет Post!')
    })


// get with callback
// app.get('/hello', cb, (req, res) => { 
//     res.send('Привет мой друг!')
// })


// вариант с массивом из callback'ов
// app.get('/hello', [cb, cb, (req, res) => { 
//     res.send('Привет мой друг!')
// }])


app.listen(port, () => { // нужно чтобы слушать запросы
    console.log(`Сервер запущен на http://localhost:${port}`)
})

