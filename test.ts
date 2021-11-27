let a: number = 5
let b: string = 'sfs'

let c: number = a + Number(b)

let d: boolean = true

let names: string[] = ['sd', 'sdfsd']

let tup: [number, string] = [2, 'sdfds'] // кортеж
tup.push('adfas') // можно добавить 3 элемент, но к нему нельзя обратиться

let e: any = 5; // any совместима с javascript
e = 'dsf'
e = true

let anyArr: any[] = ['sdf', 3, true]

function greet(name: string) {
    return name + 'Hi'
}

names.map(x => x)
names.map((x: string) => x) // работа с анонимными функциями


function coord(coord: { lat: number, long?: number }) { // объявляем объектный тип в аргументе функции

}