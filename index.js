const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require ("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require ("./lib/htmlRenderer");

let teamMembers = [];

const firstQuestion = {
 type: "list",
 message = "Would you like to add a member or generate current team?",
 name= "Add",
 choices = ["Add Member", "Generate Team"],


};

const yourRole = {
   type: "list",
   message = "What member do you want to Add?",
   name = "Role",
   choices = ["Intern", "Engineer", "Manager"],
};

const fileQuestion = {
    type: "input",
    message: "Please enter a valid name",
    name: "fileName",


};

const Questions = {
    Manager: [
    {
        type: "input",
        message: "Please enter your name",
        name: "name",

    },
    {
        type: "input",
        message: "What is your id Number?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
    },
    


    ],
    Engineer: [
        {
         type: "input",
         message: "Your Name",
         name: "name",
        },
        {
         type: "input",
         message: "What is your id Number?",
         name: "id",
        },
        {
         type: "input",
         message: "What is your email?",
         name: "email",
        },
        {
         type: "input",
         message: "What is your Github userName?",
         name: "githubUserName",

        },
    ],
    Intern: [
     {
        type: "input",
        message: "Please enter your name",
        name: "name",
     },
     {
       type: "input",
       message: "What is your id Number?",
       name: "name",
     },
     {
      type: "input",
      message: "What is your email?",
      name: "email",

     },
     {
         type: "input",
         message: "Name of school you are attending?",
         name: "school",
     },
    ],
};
const startApp = () =>{
    selectRole();
};

const addOrFinish = ()=>{
    inquirer.prompt(firstQuestion).then((answer)=>{
        if(answer.Add === "Add Member"){
            selectRole()

        } else{
            getFilename();


        }
    });
};

const selectRole = () => {
    inquirer.prompt(yourRole).then((answer) =>{
        if(answer.Add === "Add Member"){
            
        }
    })
}