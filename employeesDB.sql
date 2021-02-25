-- drop the the employees_db if it exists currently
drop database if exists employees_db;
-- create the employees_db 
CREATE DATABASE employees_db;
-- USE so the code will affect employees_db
USE employees_db;
-- CREATE the table "employee"
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int,
    manager_id int,
);
-- CREATE the table "role"
CREATE TABLE role (
    id INT auto_increment PRIMARY KEY,
    title varchar(30) not null,
    salary decimal,
    department_id int,
);
-- CREATE the table "department"
CREATE TABLE department (
    id INT PRIMARY KEY, 
    name varchar(30) NOT NULL
);