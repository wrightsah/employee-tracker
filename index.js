// dependencies - require mysql, inrquirer, and console.table

const mysql = require("mysql");
const inquirer = require("inquirer");
const consoletable = require("console.table");

// initialize database

const connection = mysql.createConnection({
    host: 'localhost',
    // port
    port: 3306,
    // username
    user: 'root',
    // password
    password: 'Mysql2021',
    //database
    database: 'employeesDB'
});

// - - - - - - - - - - MAIN MENU - - - - - - - - - - //

const start = () => {
  // inquirer questions

  inquirer
    .prompt({
      // "What would you like to do?"
      name: "mainMenu",
      type: "list",
      message: "What would you like to do?",
      choices: ["VIEW", "ADD", "UPDATE"],
    })
    .then((answer) => {
      // Based on the answer, run an approprate function
      if (answer.mainMenu === "VIEW") {
        //run function viewMenuFunc
        viewMenuFunc();
        
      } else if (answer.mainMenu === "ADD") {
        //run function addMenuFunc
        console.log(`Run the ${answer.mainMenu} function`);
      } else if (answer.mainMenu === "UPDATE") {
        //run function updateMenuFunc
        console.log(`Run the ${answer.mainMenu} function`);
      }
    
    });
}
// - - - - - - - - - - VIEW - - - - - - - - - -//
const viewMenuFunc = () => {
    inquirer
    .prompt({
        // What would you like to view?
        name: 'viewMenu',
        type: 'list',
        message: 'What would you like to view?',
        choices: ['View all EMPLOYEES','View all ROLES', 'View all DEPARTMENTS'],

    })
    .then((answer) => {
        // Based on the answer, run an approprate function
        if (answer.viewMenu === "View all EMPLOYEES") {
          //run function viewEmployees
          console.log('viewEmployees selected');
            viewEmployees();
        } else if (answer.viewMenu === "View all ROLES'") {
          //run function viewRoles
          console.log('viewRoles');
        } else if (answer.viewMenu === "View all DEPARTMENTS") {
          //run function viewDepartments
          console.log('viewDepartments');
        }
    });
}

    // Function to view all employees

    const viewEmployees = () => {
        console.log('viewEmployees is running');
        connection.query('SELECT * FROM employee', (err, res) => {
            if (err) throw err;
            console.log(res);
            res.forEach(({id, first_name, last_name, role_id, manager_id}) => {
                console.log(`${id} | ${first_name} | ${last_name} | ${role_id} | ${manager_id}`);
            });
        })
    }
    
    // Function to view all roles

    // Function to view all departments



// - - - - - - - - - - ADD - - - - - - - - - -// 


  // Function to add new employee - addEmployee
  // What do I need when inserting a new employee?
  // insert into [table name] (first_name, last_name, role_id, manager_id) values ('john', 'smith', etc.);

  // Function to "Add new role" - addRole
  // What do I need when inserting a new role?

  // Function "Add new department" - addDepartment
  // What do I need when inserting a new department?
  


// - - - - - - - - - - UPDATE - - - - - - - - - -// 

// Connect to database
connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);
    start(); 
});

// Make the function go back to start

