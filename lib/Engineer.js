const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name,id,email);
        this.github = github;
    }

    printInfo(){
        console.log(`github: ${this.github}`);
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
    }
    getGithub(){
        return this.github;
    }
}
module.exports = Engineer