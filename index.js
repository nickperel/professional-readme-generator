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
    },
    {
        type: 'input',
        name: 'installations',
        message: 'Specify which installations are necessary to get your app up and running: (If none, just press enter!)',
        default: 'None'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please specify any instructions for the usage of your app / examples for use. Include screenshots as needed:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you would like other developers to contribute to your application, please specify the guidelines they should follow in order to do so: (If you would like to apply The Contributor Covenant guidelines, just press enter!)',
        default: '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)'
    },
    
];

// TODO: Create a function to write README file
function generateTableOfContents(answers) {}


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
