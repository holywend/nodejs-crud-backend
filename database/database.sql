CREATE DATABASE db_crud_sample;

USE db_crud_sample;

DROP TABLE IF EXISTS tb_users;
DROP TABLE IF EXISTS tb_employees;

CREATE TABLE tb_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE tb_employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fullname VARCHAR(100) NOT NULL,
    dob DATE,
    sex VARCHAR(10),
    image VARCHAR(255)
)