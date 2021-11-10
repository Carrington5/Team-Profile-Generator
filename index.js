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
                name:'managerName',
                message: "What is the team manager's name?"
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the team manager's employee ID?"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's Email address?"
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: "What is the team manager's office number?"
            }
        ]).then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice)
            teamMembersArr.push(manager);
            idArr.push(response.managerId)

            createTeam() 
        })
    }

    function createTeam() {
        inquirer.prompt([
        { 
            type: 'list',
            name: 'teamList',
            message: 'Are they any other team members?',
            choices: ['Engineer', 'Intern', 'No other team members?']
        }
    ]).then(userChoice =>{
        switch (userChoice.teamList) {
            case 'Enginner':
                addEngineer()
                break;
            case 'Intern':
                addIntern()
                break;
            default:
                buildTeam();        
        }
    })
        
    }
}   function addEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: "What is the Engineers's name?"
        },
        {
            type: 'input',
            name: 'engId',
            message: "What is the engineer's emplyee ID?"
        }

    ])
}
