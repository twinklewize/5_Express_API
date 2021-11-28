class Coord {
    message = "1"
    #something = 1 // приватное св-ство JS 
    // (использовать только если очень сильно нужно защитить переменную)
    lat!: number // null-safety (StictPropertyInitialization: true)
    long: number

    private test() { // видно только в этом классе
        if (this.lat > 0) {

        }
    }

    protected computeDistace(newLat: number, newLong: number) {
        // видно в этои классе и классах наследниках
        this.test
        return 0
    }

    constructor(lat: number, long: number) {
        this.lat = lat
        console.log(this.message)
    }
}

const point = new Coord(0, 1)

class MapLocation extends Coord {
    message = "2"
    private _name: string // уровни доступа после компиляции исчезают


    get name() {
        return this._name
    }

    set name(s: string) {
        this._name = s + ' cool!'
    }

    override computeDistace(newLat: number, newLong: number) {
        return 1
    }

    constructor(lat: number, long: number, name: string) {
        super(lat, long) // в начале конструктора
        this.name = name
    }

    private error() {

    }
}



interface LoggerService {
    log: (s: string) => void
}

class Logger implements LoggerService {
    log(s: string) { // интерфейс не влияет на реализацию, нужно явно задавать тип
        console.log(s)
    }
}

const l = new Logger()
l.log('d')


class MyClass { //статических классов нету, только методы и переменные
    static {
    }
    static a = "1"


}

MyClass.a

class MyClass2<T> {
    a: T
}

const b = new MyClass2<string>()
b.a


abstract class Base {
    print(s: string) {
        console.log(s)
    }

    abstract error(s: string): void
}

class BaseExtended extends Base {
    error(s: string) { // мы обязаны реализовать метод error

    }

}

new BaseExtended().print('s')

class Animal {
    name: string
}

class Dog {
    name: string
    tail: boolean
}

const puppy: Animal = new Dog() // сужаем класс до Animal

