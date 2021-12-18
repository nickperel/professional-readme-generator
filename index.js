// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to apply?',
        choices: ['IBM', 'MIT', 'Mozilla']
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            const generatedReadMe = generateMarkdown(answers);
            console.log(generatedReadMe);
        fs.writeFile('ReadMe.md', generatedReadMe, (err) => {
            if (err) throw err;
            console.log('Successfully generated README');
        })
        })
}

// Function call to initialize app
init();
