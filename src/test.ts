import 'reflect-metadata'

function Injectable(key: string) {
    return (target: Function) => {
        Reflect.defineMetadata(key, 1, target)
        const meta = Reflect.getMetadata(key, target)
        console.log(meta)
    }
}

// function Inject(key: string) {
//     return (target: Function) => {
//         Reflect.defineMetadata(key, 1, target)
//         const meta = Reflect.getMetadata(key, target)
//         console.log(meta)
//     }
// }

function Prop(target: Object, name: string) {

}

@Injectable('C')
class C {
    @Prop prop: number
}

@Injectable('D')
class D {
    constructor(@Inject('C') c: C) {}
}

// Объявляем объекты которые хотим Inject'ить, в глобальную область закидываем все что нужно