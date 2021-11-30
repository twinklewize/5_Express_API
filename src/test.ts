// function Component(target: Function) {
//     console.log(target)
// }



// @Component
// export class User {
//     id: number

//     updateId(newId: number) {
//         this.id = newId
//         return this.id
//     }
// }

// console.log(new User().id)


function Logger() {
    console.log('init Logger')
    return (target: Function) => {
        console.log('run Logger')
    }
}


function Component2(id: number) {
    console.log('init component')
    return (target: Function) => {
        console.log('run component')
        target.prototype.id = id
    }
}

function Method(
    target: Object,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor
) {
    console.log('Метод: ' + propertyKey)
    const oldValue = propertyDescriptor.value
    propertyDescriptor.value = function (...args: any[]) {
        // oldValue()
        return args[0] * 10
    }
}

function Prop(
    target: Object,
    propertyKey: string) {
    let value: number
    const getter = () => {
        console.log('Get!')
        return value
    }
    const setter = (newValue: number) => {
        console.log('Set!')

        value = newValue
    }

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    })
}

function Param(
    target: Object,
    propertyKey: string,
    index: number) {
        console.log(propertyKey, index)
}

// инициализация в таком порядке, отработка в обратном порядке
@Logger()
@Component2(1)
export class User2 {
    @Prop id: number

    @Method
    updateId(@Param newId: number) {
        this.id = newId
        return this.id
    }
}

console.log(new User2().id)
console.log(new User2().updateId(2))
