function log<T>(obj: T): T { // функция принимает T и возращает T
    console.log(obj)
    return obj
}

log<string>('asd')
log<number>(3)

function log2<T, K>(obj: T, arr: K[]): K[] { // функция принимает T и возращает T
    console.log(obj)
    return arr
}

log2<string, number>('asd', [1, 2])

interface HasLength {
    length: number
}

function log3<T extends HasLength>(obj: T): T { 
    obj.length
    return obj
}

interface IUser {
    name: string
    age: number
    bid: (sum: number) => boolean; // задаем функция интерфейсу
}

function bid(sum: number): boolean{
    return true
}

interface IUser2 {
    name: string
    age: number
    bid2: <T>(sum: T) => boolean; // описываем с интерфейсом
}

function bid2<T>(sum: T): boolean{
    return true
}