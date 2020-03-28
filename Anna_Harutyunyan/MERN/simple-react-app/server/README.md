My MERN APP

## My MERN project
 - server 
 - client
 - users.json

## REQUIREMENTS

1) Node v8.9.4 >=
2) Mongodb 3.2.22

## STEPS

### Insert database

	open a new terminal
	sudo mongoimport --db <dbName> --collection <colName> --file <importedFileName>
	// <dbNmae>-db
    // <colName>-users
    // <importedFileName>-users.json

### Install client dependencies

	open a new terminal
	cd /simple-react-app/server/client
	npm i

### Start project

	open a new terminal
	cd /simple-react-app/server
	npm i
	npm run dev
