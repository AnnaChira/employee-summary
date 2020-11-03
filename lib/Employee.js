class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    printInfo(){
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
    }
getName(){
    return this.name;
}
getId(){
    return this.id;
}
getEmail(){
    return this.email;
}
getRole(){
    return this.constructor.name;
}
}
module.exports = Employee