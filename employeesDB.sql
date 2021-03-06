-- drop the the employeesDB if it exists currently
DROP DATABASE IF EXISTS employeesDB;
-- create the employees_db 
CREATE DATABASE employeesDB;
-- USE so the code will affect employeesDB
USE employeesDB;
-- CREATE the table "employee"
CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int,
    manager_id int,
    PRIMARY KEY(id)
);
-- CREATE the table "role"
CREATE TABLE role (
    id INT auto_increment,
    title varchar(30) not null,
    salary decimal,
    department_id int,
    PRIMARY KEY(id)
);
-- CREATE the table "department"
CREATE TABLE department (
    id INT auto_increment,
    name varchar(30) NOT NULL,
    PRIMARY KEY(id)
);

-- create sample employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Stephen', 'Wright', '1', '1');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Thom', 'Yorke', '2', '2');

-- create sample roles
INSERT INTO role (title, salary, department_id)
VALUES ('Guest Services Representative', '24000', '2');

-- create departments 
INSERT INTO department (name)
VALUES ('Engineering');
INSERT INTO department (name)
VALUES ('Guest Services');
INSERT INTO department (name)
VALUES ('Housekeeping');
INSERT INTO department (name)
VALUES ('Reservations');
INSERT INTO department (name)
VALUES ('Sales');