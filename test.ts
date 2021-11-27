type coord = {lat: number, long: number}

interface ICoord {
    lat: number
    long: number
}

type ID = number | string; //с типами так можно, с интерфейсом нет


function compute (coord: {lat: number, long: number}) {

}

interface IAnimal {
    name: string
}

interface IDog extends IAnimal {
    tail?: boolean // добавляем к Animal свойство
}

const dog: IDog = {
    name: 'sdf'
}

type Animal = {
    name: string,
}

type Dog = Animal & { // наследование через types, но интерфейсы удобнее
    tail: boolean
}

interface IDog2 {
    name: string
}

interface IDog2 {
    tail: boolean 
}

const dog2: IDog2 = { // в таких случаях интерфейсы объединяются между собой
    // с type такое работать не будет
    name: 'dsg',
    tail: true
}

//types не могут участвовать в слиянии определений
//interfaces могут определять только объеты, а не примитивы

// всегда использовать intarface, если не нужна какая-то фича types

