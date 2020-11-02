class Manager{
    constructor(name, id, email, role, phone){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.phone = phone;
    }
    printInfo(){
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
        console.log(`role: ${this.role}`);
        console.log(`phone: ${this.phone}`);
    }
}