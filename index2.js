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
    name: "last_name",
    message: "What's your last name?",
  },
];
//-----STRING or TEMPLATE LITERAL-----// place the answers somewhere & tell computer to display answers
inquirer.prompt(questions).then((answers) => {
  const { name } = answers;

  console.log(answers);
  let projectTitle = `${answers.project_Title}`;
  let lastName = `${answers.last_name}`;
  console.log(lastName);
  console.log(projectTitle);
  //-----FILE MARKDOWN STYLING-----//
  const generateMarkdownStyling = (answers) => {
    return `
    
**${projectTitle}**

# Table of Contents

- [Description](#description)
${lastName}

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
