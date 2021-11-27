let universalId: number | string = 5 // union тип
universalId = 'sdf'

function printId(id: number | string) {
    if (typeof id == 'string') {
        console.log(id.toUpperCase())
    } else {
        id++;
    }
}

function helloUser(user: string | string[]) {
    if (Array.isArray(user)) {
        console.log(user.join(', ') + 'Hi!')
    } else {
        console.log(user + 'Hi!')
    }
}