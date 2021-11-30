import 'reflect-metadata'

function Test(target: Function) {
    Reflect.defineMetadata('a', 1, target)
    const meta = Reflect.getMetadata('a', target)
    console.log(meta)
}

function Prop(target: Object, name: string){

}

@Test
class C {
    @Prop prop: number
}

// метадата помогает делать проверку типов в рантайме (описано в Prop)