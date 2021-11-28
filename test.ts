let a = 'Привет'

if (typeof a == 'string') { // проверка на тип переменной

}

let b: typeof a // присваивание типа другой переменной

type Coord = {
    lat: number
    long: number
}

type P = keyof Coord //присваивание ключа другого типа

let c: P = 'long'

function log(a: string | null, b: number | null): void {
    a?.toLocaleLowerCase // забить на null
    b!++ // сказать что b точно не равно null
}

const d: bigint = BigInt(100)
const e: symbol = Symbol('sdfsd') // превращает строку в уникальный объект
const m: symbol = Symbol('sdfsd')