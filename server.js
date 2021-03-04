// dependencies - require mysql, inrquirer, and console.table

const mysql = require("mysql");
const inquirer = require("inquirer");
// const consoletable = require("console.table");

// initialize database

const connection = mysql.createConnection({
  host: "localhost",
  // port
  port: 3306,
  // username
  user: "root",
  // password
  password: "Mysql2021",
  //database
  database: "employeesDB",
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
        addMenuFunc();
      } else if (answer.mainMenu === "UPDATE") {
        //run function updateMenuFunc
        updateMenuFunc();
      }
    });
};
// - - - - - - - - - - VIEW - - - - - - - - - -//
const viewMenuFunc = () => {
  inquirer
    .prompt({
      // What would you like to view?
      name: "viewMenu",
      type: "list",
      message: "What would you like to view?",
      choices: ["View all EMPLOYEES", "View all ROLES", "View all DEPARTMENTS"],
    })
    .then((answer) => {
      // Based on the answer, run an approprate function
      if (answer.viewMenu === "View all EMPLOYEES") {
        //run function viewEmployees
        // console.log("viewEmployees selected");
        viewEmployees();
      } else if (answer.viewMenu === "View all ROLES") {
        //run function viewRoles
        viewRoles();
      } else if (answer.viewMenu === "View all DEPARTMENTS") {
        //run function viewDepartments
        viewDepartments();
      }
    });
};

// Function to view all employees

const viewEmployees = () => {
  // console.log("viewEmployees is running");
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    // console.log(res);
    // res.forEach(({ id, first_name, last_name, role_id, manager_id }) => {
    console.table(res);
    // `${id} | ${first_name} | ${last_name} | ${role_id} | ${manager_id}`
    // start();
    // });
  });
  start();
};

// Function to view all roles

const viewRoles = () => {
  connection.query('SELECT * FROM role', (err, res) => {
    if (err) throw err;
    console.table(res);
  
  }
  );
  start();
}

// Function to view all departments

const viewDepartments = () => {
  connection.query('SELECT * FROM department', (err, res) => {
    if (err) throw err;
    console.table(res);
  
  }
  );
  start();
}


// - - - - - - - - - - ADD - - - - - - - - - -//

// General add menu

const addMenuFunc = () => {
  inquirer
    .prompt({
      // What would you like to add?
      name: "addMenu",
      type: "list",
      message: "What would you like to add?",
      choices: ["Add new EMPLOYEE", "Add new ROLE", "Add new DEPARTMENT"],
    })
    .then((answer) => {
      // Based on the answer, run an approprate function
      if (answer.addMenu === "Add new EMPLOYEE") {
        //run function addEmployee
        console.log("addEmployee");
        addEmployee();
      } else if (answer.addMenu === "Add new ROLE") {
        //run function addRole
        console.log("addRole");
      } else if (answer.addMenu === "Add new DEPARTMENT") {
        //run function addDepartment
        console.log("addDepartment");
      }
    });
};

// Function to add new employee - addEmployee
// What do I need when inserting a new employee?
// insert into [table name] (first_name, last_name, role_id, manager_id) values ('john', 'smith', etc.);

const addEmployee = () => {
  console.log("addEmployee is running");
  inquirer
    .prompt([
      {
        type: "input",
        message: "First Name?",
        name: "first_name",
      },
      {
        type: "input",
        message: "Last Name?",
        name: "last_name",
      },
      {
        type: "input",
        message: "Role?",
        name: "role_id",
      },
      {
        type: "input",
        message: "Manager?",
        name: "manager_id",
      },
    ])
    .then((answer) => {
      // console.log(answer);
      connection.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('${answer.first_name}', '${answer.last_name}', '${answer.role_id}', '${answer.manager_id}')`,
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} employee added.`);
        }
      );
      start();

    });
};

// Function to "Add new role" - addRole
// What do I need when inserting a new role?

  // const addRole = () => {
  //   console.log('addRole is running');
  //   inquirer.prompt([
  //     {type: 'input',
  //     message: 'Role Name?',
  //     name: 'roleName'},
  //     {
  //       type: 'input',
  //       message: 'Role Salary?',
  //       name: 'roleSalary'
  //     },
  //     {
  //       type: 'input',
  //       message: 'Role ID?',
  //       name: 'roleID'
  //     },
  //   ])

  // }

// Function "Add new department" - addDepartment
// What do I need when inserting a new department?

// const addDepartment = () => {

// }

// - - - - - - - - - - UPDATE - - - - - - - - - -//

const updateMenuFunc = () => {
  inquirer
    .prompt({
      // What would you like to update?
      name: "updateMenu",
      type: "list",
      message: "What would you like to update?",
      choices: ["Update EMPLOYEE", "Update ROLE", "Update DEPARTMENT"],
    })
    .then((answer) => {
      // Based on the answer, run an approprate function
      if (answer.updateMenu === "Update EMPLOYEE") {
        //run function updateEmployee
        // console.log("viewEmployees selected");
        console.log('updateEmployee();');
      } else if (answer.updateMenu === "Update ROLE") {
        //run function updateRole
        console.log('updateRole();');
      } else if (answer.updateMenu === "Update DEPARTMENT") {
        //run function updateDepartment
        console.log('updeateDepartment();');
      }
    });
};

// Connect to database
connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected as id ${connection.threadId}`);
  start();
});

// Make the function go back to start
