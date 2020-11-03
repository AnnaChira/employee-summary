const Employee = require("./Employee")

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name,id,email);
        this.school = school;
    }
    printeInfo(){
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
        console.log(`school: ${this.school}`);
    }
}
module.exports = Intern