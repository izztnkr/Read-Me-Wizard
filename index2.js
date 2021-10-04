const inquirer = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");

// TODO: Include packages needed for this application
//install inquirer

//-----INPUT or QUESTIONS-----//
//tell computer to use inquirer to ask a set of questions and recieve answers
//tell computer to run it
//from command line "node index2.js"
// const questions = [
//   {
//     type: "input",
//     name: "first_name",
//     message: "What's your first name?",
//   },
//   {
//     type: "input",
//     name: "last_name",
//     message: "What's your last name?",
//   },
// ];

// inquirer
//   .prompt(questions)
//   .then((answers) => {
//     // answers = (first_name, +"" + last_name);
//     // console.log(answers);
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       console.log(
//         "Couldn't be rendered in the current environment. Yes, this is an error message"
//       );
//     } else {
//       console.log("Something else went totes wrong");
//     }
//   });

//-----STRING or TEMPLATE LITERAL-----//
//tell computer to display answers
//it would be a template literate to file
// const message = (first_name, +"" + last_name);
// console.log(message);
// const generateReadMePage = (questions)

// const generatePage = (name, name) => `Name: ${first_name}, Name: ${last_name}`;
// //place this in the .then part of the inquirer prompt

//-----FILE or WRITE FILE-----//
//file styling//
const name = "izztnkr";
const projecTitle = "Test Title";

const generateMarkdownStyling = (name, projecTitle) => {
  return `
  
**${projecTitle}**
---


*Table of Contents*
---
<a href="https://github.com/${name}">Description</a>

<a href="https://github.com/${name}">Installation</a>

<a href="https://github.com/${name}">Usage</a>

<a href="https://github.com/${name}">License</a>

<a href="https://github.com/${name}">Contributing</a>

<a href="https://github.com/${name}">Tests</a>

<a href="https://github.com/${name}">Questions</a>

---
**Description**
---
---
**Installation**
---
---
**Usage**
---
---
**License**
---
---
**Contributing**
---

---
**Tests**
---
---
**Questions**
---
  
  `;
};

//write a file
//what kind of file? readme.md essentially an .md file or markdown file
//how do we do that? we have to write a promise within the "generateMarkdown.js" file (see 9.2.5 & 9.5.4 in module readings)
fs.writeFile(
  "./ReadMeWizard.md",
  generateMarkdownStyling(name, projecTitle),
  (err) => {
    //replace "hello world in read me" with the template literal //
    if (err) throw err;
    console.log("doneskies! You can check for file now.");
  }
);
