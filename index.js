const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require ('fs');
// const generateHTML = require('./dist/generate.html');
const generateCard = require('./src/generateCard.js');

function appendToFile(filename, data) {
    fs.appendFile(filename, `${data}`, (err) => {
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
            type: 'input',
            message: "Enter team manager's ID",
            name: 'managerID',
        },
        {
            type: 'input',
            message: "Enter team manager's email",
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: "Enter team manager's office number",
            name: 'managerOfficeNum',
        },
    ]).then(data => {
        appendToFile("./dist/generate.html", generateCard(data));
    });
};

init();