#!/bin/bash

echo "Olá, Mundo do novo trello!"

SENHA="password"
mysql -u sammy -p"$SENHA" -e"CREATE DATABASE IF NOT EXISTS myTrello; USE myTrello; CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255),position VARCHAR(255)); CREATE TABLE IF NOT EXISTS myTrello.tasks (id INT AUTO_INCREMENT PRIMARY KEY,taskName VARCHAR(255) UNIQUE,priority INT,owner INT,staff INT, description TEXT, status VARCHAR(255), startDate TIMESTAMP, endDate TIMESTAMP, effortInHours INT,FOREIGN KEY (owner) REFERENCES users(id), FOREIGN KEY (staff) REFERENCES users(id));"
