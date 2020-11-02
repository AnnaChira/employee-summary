class Intern{
    constructor(name, id, email, role, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
    }
    printeInfo(){
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
        console.log(`role: ${this.role}`);
        console.log(`school: ${this.school}`);
    }
}