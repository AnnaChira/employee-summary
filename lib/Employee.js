const inquirer = require("inquirer");
const fs = require("fs");
const templates = require("templates");
const renderEngineer = require("./lib/htmlRenderer")

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
        
    }
]