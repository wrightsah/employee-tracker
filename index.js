// dependencies - require mysql, inrquirer, and console.table

const mysql = require("mysql");
const inquirer = require("inquirer");
const consoletable = require("console.table");

// function to run questions for main menu

const start = () => {
  // inquirer questions

  inquirer.prompt({
      // "What would you like to do?"
      name: 'mainMenu',
      type: 'list', 
      message: 'What would you like to do?', 
      choices: ['Add new EMPLOYEE','Add new ROLE', 'Add new DEPARTMENT'],
  })
    .then((answer) => {
        // Based on the answer, run an approprate function
        if (answer.mainMenu === 'Add new EMPLOYEE') {
            //run function addEmployee
            console.log(answer.mainMenu);
        } else if (answer.mainMenu === 'Add new ROLE') {
            //run function addRole
            console.log(answer.mainMenu);
        } else if (answer.mainMenu === 'Add new DEPARTMENT') {
            //run function addDepartment
            console.log(answer.mainMenu);
        }
    });
    // Function to add new employee
    // What do I need when inserting a new employee?
    // insert into [table name] (first_name, last_name, role_id, manager_id) values ('john', 'smith', etc.);


    // Function to "Add new role"
    // What do I need when inserting a new role?


    // Function "Add new department"
    // What do I need when inserting a new department?
  };
    


  // Make the function go back to start

start();