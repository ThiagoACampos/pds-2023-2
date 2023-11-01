#!/bin/bash

echo "Olá, Mundo do novo trello!"

SENHA="password"
mysql -u sammy -p"$SENHA" -e"CREATE DATABASE IF NOT EXISTS myTrello;"
mysql -u sammy -p"$SENHA" -D myTrello -e"CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255),position VARCHAR(255));"

# Comando SQL para criar a tabela
SQL_QUERY_TABLE_TASKS="CREATE TABLE IF NOT EXISTS \`tasks\` (
  \`id\` int NOT NULL AUTO_INCREMENT,
  \`taskName\` varchar(255) DEFAULT NULL,
  \`priority\` int DEFAULT NULL,
  \`owner\` int DEFAULT NULL,
  \`startDate\` TIMESTAMP DEFAULT NULL,
  \`workload\` int DEFAULT NULL,
  \`category\` varchar(100) DEFAULT NULL,
  \`description\` varchar(100) DEFAULT NULL,
  \`status\` varchar(100) DEFAULT NULL,
  \`endDate\` TIMESTAMP DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  KEY \`owner\` (\`owner\`),
  CONSTRAINT \`tasks_ibfk_1\` FOREIGN KEY (\`owner\`) REFERENCES \`users\` (\`id\`)
)"

mysql -u sammy -p"$SENHA" -D myTrello -e "$SQL_QUERY_TABLE_TASKS"
