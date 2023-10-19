// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import * as fs from 'node:fs';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the title of your project?",
    default: "",
  },
  {
    type: "input",
    name: "descriptions",
    message: "Provide the description of your project.",
    default: "",
  },
  {
    type: "input",
    name: "installation instructions",
    message: "Expalin how to install your application",
    default: "",
  },
  {
    type: "input",
    name: "Usage",
    message: "Provide instructions and examples for use. ",
    default: "",
  },
  {
    type: "input",
    name: "Credits",
    message: "List your collaborators, if any, with links to their GitHub profiles.",
    default: "N/A",
  },
  {
    type: "checkbox",
    name: "License",
    message: "Choose the license most applicable to your application. Check https://choosealicense.com/ for more details",
    choices: ["MIT Licence: A short and simple permissive license with conditions only requiring preservation of copyright and license notices",
              "GNU General Public License v3.0: Allow ets people do almost anything they want with your project, except distributing closed source versions.",
              "ISC License: Equivalent to the BSD 2-Clause and MIT licenses, removing some language that is no longer necessary.",
              "Apache License 2.0: A permissive license whose main conditions require preservation of copyright and license notices."]              
  },
  {
    type: "input",
    name: "Tests",
    message: "Provide tests for your application.",
    default: "N/A",
  },
  {
    type: "input",
    name: "Username",
    message: "Provide your GitHub username.",
    default: "",
  },
  {
    type: "input",
    name: "Email",
    message: "Provide your email address for people with questionst to reach out to. This data will be published on GitHub.",
    default: "",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      fs.appendFile('readme.md',JSON.stringify(response),(err) =>
      err ? console.error(err) : console.log('Your readme file is successfully saved'));
    });
}

// Function call to initialize app
init();
