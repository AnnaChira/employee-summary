const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    printInfo(){
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
        console.log(`phone: ${this.officeNumber}`);
    }
}
module.exports = Manager