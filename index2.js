// TODO: Include packages needed for this application
//install inquirer
const inquirer = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");

//-----INPUT or QUESTIONS-----// tell computer to use inquirer to ask a set of questions and recieve answers
const questions = [
  {
    type: "input",
    name: "project_Title",
    message: "What's your project's name?",
  },
  {
    type: "input",
    name: "last_Name",
    message: "What's your last name?",
  },
  {
    type: "input",
    name: "email_Me",
    message: "What is the email to reach you at?",
  },
  {
    type: "input",
    name: "git_Hub",
    message: "What is your GitHub username?",
  },
];
//-----STRING or TEMPLATE LITERAL-----// place the answers somewhere & tell computer to display answers
inquirer.prompt(questions).then((answers) => {
  const { name } = answers;

  console.log(answers);

  //-----FILE MARKDOWN STYLING-----//
  const generateMarkdownStyling = (answers) => {
    return `
    
# **${answers.project_Title}**

# Table of Contents

- [Description](#description)
${answers.last_Name}

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

---

# Description

---

# Installation

---

# Usage

---

# License

---

# Contributing

---

# Tests

---

# Questions
Do you have questions? Here's how to contact me. 

<a href = "mailto: ${answers.email_Me}">Email me!</a>

<a href= "https://github.com/${answers.git_Hub}">GitHub </a>

  `;
  };
  //-----FILE or WRITE FILE-----// ie tell the computer to write a file
  fs.writeFile("./ReadMeWizard.md", generateMarkdownStyling(answers), (err) => {
    if (err) throw err;
    console.log("doneskies! You can check for file now.");
  });
});
// .catch((error) => {
//   if (error.isTtyError) {
//     console.log(
//       "Couldn't be rendered in the current environment. Yes, this is an error message"
//     );
//   } else {
//     console.log("Something else went totes wrong");
//   }
// });

//-----FILE MARKDOWN STYLING-----//
// const generateMarkdownStyling = (answers) => {
//   return `

// **${answers.project_Title}**

// # Table of Contents

// - [Description](#description)

// - [Installation](#installation)

// - [Usage](#usage)

// - [License](#license)

// - [Contributing](#contributing)

// - [Tests](#tests)

// - [Questions](#questions)

// ---

// # Description

// ---

// # Installation

// ---

// # Usage

// ---

// # License

// ---

// # Contributing

// ---

// # Tests

// ---

// # Questions

//   `;
// };
