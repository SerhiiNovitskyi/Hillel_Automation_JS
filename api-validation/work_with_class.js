class User {
    arms = 2
    constructor (name) {
        this.name
    }
    sayHello() {
        console.log('Hello')
    }
    get getName() {
        return this.name
    }
    set name(val) {
        if (val.length <5) {
            console.log ('Please fill onle letters')
            return
        }
        this.name = val
    }

}

let userN = new User('Hipopotamus')
let nnn = userD.getName
console.log(nnn)
