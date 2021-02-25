-- drop the the employees_db if it exists currently
drop database if exists employees_db;
-- create the employees_db 
CREATE DATABASE employees_db;
-- USE so the code will affect employees_db
USE employees_db;
-- CREATE the table "employee"
CREATE TABLE employee (
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    manager_id int,
);
-- CREATE the table "role"
CREATE TABLE role (
    title varchar(30),
    salary decimal,
    department_id int,
);
-- CREATE the table "department"
CREATE TABLE department (name varchar(30));