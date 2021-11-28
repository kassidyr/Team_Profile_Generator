const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const createHTML = require("./src/createHTML");

const team = []

function createManager() {
    console.log("Please enter detail for you team Manager.");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "Please enter the manager's name."
                }
            }
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the manager's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "Please enter the manager's ID."
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "Please enter the manager's email address."
                }
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "Please enter the manager's office number."
                }
            }
        }      
    ]).then(function(answers){
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber)
        team.push(manager);
        promptTeam();
    })
}

function createEngineer() {
    console.log("Please enter detail for you team engineer.");
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "Please enter the engineer's name."
                }
            }
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is the engineer's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "Please enter the engineer's ID."
                }
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "Please enter the engineer's email address."
                }
            }
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is the engineer's GitHub?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "Please enter the engineer's GitHub."
                }
            }
        }      
    ]).then(function(answers){
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub)
        team.push(engineer);
        promptTeam();
    })
}

function createIntern() {
    console.log("Please enter detail for you team intern.");
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "Please enter the intern's name."
                }
            }
        },
        {
            type: "input",
            name: "internID",
            message: "What is the intern's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "Please enter the intern's ID."
                }
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "Please enter the intern's email address."
                }
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "Please enter the intern's school."
                }
            }
        }      
    ]).then(function(answers){
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
        team.push(intern);
        promptTeam();
    })
}

function promptTeam() {
    inquirer.prompt([{
        type: "list",
        message: "Would you like to add another team memeber?",
        name: "direction",
        choices: ["engineer", "intern", "no"]
    }]).then(function(answer){
        switch(answer.direction) {
            case "engineer":
                createEngineer();
                break;
            case "intern":
                createIntern();
                break;
            default:
                buildTeam();
            }
    })
}

const folderPath = path.resolve(__dirname,"dist");

function buildTeam() {
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath)
    }
    fs.writeFileSync(path.join(folderPath,"team.html"),createHTML(team), "utf-8")
}

createManager(); 