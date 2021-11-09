const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern   = require('./lib/Intern');
const Manager = require('./lib/Manager');
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./src/page-template');

const teamMembersArr = []
const idArr = []

function appCreate() {
    function createManager() {
        inquirer.prompt([
            {
                type:'input',
                name:'mgrName',
                message: "What is the team manager's name?"
            },
            {
                type: 'input',
                name: 'mgrId',
                message: "What is the team manager's employee ID?"
            },
            {
                type: 'input',
                name: 'mgrEmail',
                message: "What is the team manager's Email address?"
            },
            {
                type: 'input',
                name: 'mgrOffice',
                message: "What is the team manager's office number?"
            }
        ])
    }
}