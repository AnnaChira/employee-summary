class Engineer{
    constructor(name, id, email, github){
        this.github = github;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    printInfo(){
        console.log(`github: ${this.github}`);
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
    }
}