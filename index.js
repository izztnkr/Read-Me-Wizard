const inquirer = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");


// TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
const questions = [
//use prompt feature in inquirer to add questions and stuff
inquirer.prompt(
  [{
    type: "input",
    name: "name" //names are the keys in the response//
    Message: "what is your name?",
}
{


  // then is what happens after the thing goes through all of the questions
}]
). then(response =>{
  console.log(response)
  const html =``
  // fs.writeFile("index.html", html, function(err){
    if (err){
      console.log(err);
    }
    console.log('success');
  })

  //somewhere in .then add a switch statement for license identificatioin
}).catch //don't forget to add catch errors
 
];

// example of object destructuring from response. the important thing about deconstrucing the object is the key matching not necessarily the order//
const {user, dogs, cats, preferance} = response



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


// template literals will be used to print your gathered info into an html or whtever else you're going to display it into!
// try using a switch statement to check the license part of it instead of an if/else statement
