const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teamMembers = [];

// Function to start the app
function initApp() {
    // Run the create manager
    createManager();
}

// Function to promot manager data
function createManager() {
    console.log("Please build your team");
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            validate: answer => {
                if (answer.length < 1) {
                    return 'Please enter at least one character.';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's ID?",
            validate: answer => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return 'Please enter a positive number greater than zero.';
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?",
            validate: answer => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email address.';
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the team manager's office number?",
            validate: answer => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return 'Please enter a positive number greater than zero.';
            }
        } // use Promise to get promot values 
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        createTeam();
    });
}

// Function to Create Team
function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
        }
    ]).then(userChoice => {
        switch(userChoice.memberChoice) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                buildTeam();
        }
    });
}

// Function to add Engineer
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is your engineer's name?",
            validate: answer => {
                if (answer.length < 1) {
                    return 'Please enter at least one character.';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is your engineer's ID?",
            validate: answer => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return 'Please enter a positive number greater than zero.';
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is your engineer's email?",
            validate: answer => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email address.';
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is your engineer's GitHub username?",
            validate: answer => {
                if (answer.length < 1) {
                    return 'Please enter at least one character.';
                }
                return true;
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        createTeam();
    });
}

// Function to add Intern
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is your intern's name?",
            validate: answer => {
                if (answer.length < 1) {
                    return 'Please enter at least one character.';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is your intern's ID?",
            validate: answer => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return 'Please enter a positive number greater than zero.';
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is your intern's email?",
            validate: answer => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email address.';
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is your intern's school?",
            validate: answer => {
                if (answer.length < 1) {
                    return 'Please enter at least one character.';
                }
                return true;
            }
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        createTeam();
    });
}

// Function to build Team in output folder
function buildTeam() {
    // Check if the OUTPUT_DIR exists, not the outputPath
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamMembers), 'utf-8');
}

initApp();