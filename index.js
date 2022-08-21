const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const generateCard = require('./src/generateCard');

function writeToFile(filename, data) {
    fs.writeFileSync(filename, `${data}`, (err) => {
        if (err) throw err;
    })
}

function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter team manager's name",
            name: 'managerName',
        },
        {
            type: 'number',
            message: "Enter team manager's ID",
            name: 'managerID',
        },
        {
            type: 'input',
            message: "Enter team manager's email",
            name: 'managerEmail',
        },
        {
            type: 'number',
            message: "Enter team manager's office number",
            name: 'managerOfficeNum',
        },
    ]).then(data => {
        let manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNum);
        generateCard(manager);
        createEmployee();
    });
};

function createEmployee() {
    inquirer.prompt([
        {
            type: 'checkbox',
            message: "Add an Engineer, Intern or finish team",
            name: 'option',
            choices: ['Engineer', 'Intern', 'Finish Team']
        }
    ]).then(data => {
        if (data.option == "Engineer") {
            inquirer.prompt([
                {
                    type: 'input',
                    message: "Enter engineer's name",
                    name: 'engineerName',
                },
                {
                    type: 'number',
                    message: "Enter engineer's ID",
                    name: 'engineerID',
                },
                {
                    type: 'input',
                    message: "Enter engineer's email",
                    name: 'engineerEmail',
                },
                {
                    type: 'input',
                    message: "Enter engineer's gitHub",
                    name: 'engineerGitHub',
                },
            ]).then(response => {
                let engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGitHub);
                generateCard(engineer);
                createEmployee();
            })
        } else if (data.option == "Intern") {
            inquirer.prompt([
                {
                    type: 'input',
                    message: "Enter inter's name",
                    name: 'internName',
                },
                {
                    type: 'number',
                    message: "Enter intern's ID",
                    name: 'internID',
                },
                {
                    type: 'input',
                    message: "Enter intern's email",
                    name: 'internEmail',
                },
                {
                    type: 'input',
                    message: "Enter intern's school",
                    name: 'internSchool',
                },
            ]).then(response => {
                let intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
                generateCard(intern);
                createEmployee();
            })
        } else {
            writeToFile("./dist/teamGenerator.html", generateHTML());
        }
    });
}

init();