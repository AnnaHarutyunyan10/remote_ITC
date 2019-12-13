My Map APP

## My Map
 - server 
 - client
 - address.sql

## REQUIREMENTS

1) Node v8.9.4 >=
2) Mysql 5.7

## STEPS

### Insert database

	open a new terminal
	mysql -u<user> -p // login to mysql
	// create database in mysql
	create database address;
	// exit mysql
	exit
	mysql -u<user> -p address < address.sql

### Start server

	open a new terminal
	cd server
	npm i
	node server.js

### Start client

	open a new terminal
	cd client
	npm i
	npm start

