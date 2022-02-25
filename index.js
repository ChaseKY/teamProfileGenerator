const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generatehtml');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const employees = [];

const managerInput = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter the name of the manager.',
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter manager ID.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter manager email.',
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Enter manager office number.',
  },
];

const engineerInput = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter the name of the engineer.',
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter engineer ID.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter engineer email.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter engineer github name.',
  },
];

const internInput = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter the name of the intern.',
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter intern ID.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter intern email.',
  },
  {
    type: 'input',
    name: 'school',
    message: 'Enter intern school name.',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
  });
}

function init() {
  inquirer.prompt(managerInput).then((answers) => {
    console.log(answers);
    const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    employees.push(newManager);
    addEmployee();
  });
}

function addEmployee() {
  inquirer
    .prompt({
      type: 'confirm',
      name: 'anotherEmployee',
      message: 'Do you want to add another employee?',
    })
    .then((answer) => {
      console.log(answer);
      // ???
      if (answer.anotherEmployee === true) {
        addEorI();
      }
    });
}

function addEorI() {
  inquirer
    .prompt({
      type: 'list',
      name: 'EorI',
      message: 'Do you want to add an engineer or intern?',
      choices: ['Engineer', 'Intern'],
    })
    .then((answer) => {
      console.log(answer);
      if (answer.EorI === 'Engineer') {
        inquirer.prompt(engineerInput).then((answers) => {
          console.log(answers);
          const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
          employees.push(newEngineer);
        });
      } else if (answer.EorI === 'Intern') {
        inquirer.prompt(internInput).then((answers) => {
          console.log(answers);
          const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
          employees.push(newIntern);
        });
      }
    });
}

init();
