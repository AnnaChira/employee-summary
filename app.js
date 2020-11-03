const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = []

const questions = [
    {
        type: "input",
        name: "name",
        message: "Employee's Name",
        default: "Jane Smith",
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's id?",
        default: "12345",
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
        default: "example@employee.com",
    },
]

const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        default: "UPenn",
    },
].concat(questions);

const engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?",
        default: "examplegithbu",
    },
].concat(questions);

const managerQuestions = [
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's number?",
        default: "205-555-1234",
    },
].concat(questions);

const prompt = [
    {
        type: "confirm",
        name: "confirm",
        message: "Would you like to add another employee?",
    },
]
const employeetype = [
    {
        type: "list",
        name: "type",
        message: "What role is the employee?",
        choices: ["Engineer", "Manager", "Intern"],
    },
]

function init(){
    let role;
    let employee;
    return inquirer.prompt(employeetype)
    .then(function(answers){
        role = answers.type;
        if (answers.type === "Intern"){
            return inquirer.prompt(internQuestions)
        } else if (answers.type === "Manager"){
            return inquirer.prompt(managerQuestions)
        } else if (answers.type === "Engineer"){
            return inquirer.prompt(engineerQuestions)
        }
        
    })
    .then(function(answers){
        if (role === "Intern"){
           employee = new Intern();
        } else if (role === "Manager"){
            employee = new Manager();
        } else if (role === "Engineer"){
            employee = new Engineer();
        }
        employees.push(employee)
        return inquirer.prompt(prompt)
    })
    .then(function(answers){
        if (answers.confirm){
            return init()
        } else{
            // render(employees)
            .fs.fsyncSync
        }
    })
}
init()
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! 
