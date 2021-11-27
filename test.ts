const a = 'sdfgee' // константа имеет свое значение как тип

let b: 'hi' = "hi" //объявляем такой тип (правда так делать бесполезно)

type direction = 'left' | 'right';

function moveDog(direction: direction): -1 | 0 | 1 {
    switch (direction) {
        case 'left':
            return -1;
        case 'right':
            return 1
        default: // нужно обязательно обрабатывать, потому что в рантайме TS нет
            return 0
    }
}

moveDog('left') // теперь мы можем сюда передавать толко left и right

interface IConnection {
    host: string
    port: number
}

function connect(connection: IConnection | "default") {
    // можно комбинировать строковые литераты с обычными типами и интерфейсами

}

connect('default')

const connection = {
    host: 'localhost',
    protocol: 'https' // имеет тип Sting
}

function connect2(host: string, protocol: 'http' | 'https') {

}

// connect2(connection.host, connection.protocol)
// не будет работать, т.к. protocol имеет строчный тип и может быть изменен

const connection2 = {
    host: 'localhost',
    protocol: 'https' as 'https' // объяляем тип 'https'
}

connect2(connection.host, connection2.protocol)

const c: any = 5
let d: number = c as number // преобразовать any в number
let e = <number>c // другой способ (но лучше его не использовать, он не везде работает)
