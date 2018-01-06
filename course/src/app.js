class Pessoa {
    constructor(name, email, phone){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    toString(){
        return `
            name: ${this.name}
            email: ${this.email}
            phone: ${this.phone}
        `;
    }
}

class Client extends Pessoa {
    constructor(id, name, email, phone){
        super(name,email,phone)
        this.id = id;
    }

    toString(){
        return `
            id:${this.id}
            ${super.toString()}
        `;
    }
}

var client = new Client(1,"Paulo Victor","bd.paulovictor@gmail.com","(85)9999-9999");

console.log(client.toString());