const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
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
                type: 'input',
                name: 'mgrName',
                message: "What is the team manager's name?"
            },
            {
                type: 'input',
                name: 'mgrId',
                message: "What is the team manager's emplyee ID?"
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
        ]).then(answers => {
            const manager = new Manager(answers.mgrName, answers.mgrId, answers.mgrEmail, answers.mgrOffice);
            teamMembersArr.push(manager);
            idArr.push(answers.mgrId);

            createTeam()
        })
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'teamList',
                message: 'Do you have any other team members?',
                choices: ['Engineer', 'Intern', 'No other team members']
            }
        ]).then(userChoice => {
            switch (userChoice.teamList) {
                case 'Engineer':
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

    function addEngineer() {
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
            },
            {
                type: 'input',
                name: 'engEmail',
                message: "What is the engineer's Email Address?"

            },
            {
                type: 'input',
                name: 'engGithub',
                message: "What is the engineer's Github name?"
            }

        ]).then(answers => {
            const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGithub);
            teamMembersArr.push(engineer);
            idArr.push(answers.engId);

            createTeam()
        })
    }
    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'intName',
                message: "What is the intern's name"
            },
            {
                type: 'input',
                name: "intId",
                message: "What is the intern's employee Id?"
            },
            {
                type: 'Input',
                name: 'intEmail',
                message: "What is the intern's Email address?"
            },
            {
                type: 'input',
                name: 'intSchoolName',
                message: "What is the intern's school name?"
            }
        ]).then(answers => {
            const intern = new Intern(answers.intName, answers.IntId, answers.intEmail, answers.intSchoolname);
            teamMembersArr.push(Intern);
            idArr.push(answers.intId);

            createTeam()
        })
    }

    function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
        }
        fs.writeFileSync(outputPath, render(teamMembersArr), 'utf-8');
    }
    createManager()
}

appCreate()