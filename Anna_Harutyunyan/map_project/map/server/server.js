const express = require("express");
const mysql = require('mysql');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'address'
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
        connection.end();
    }
});

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/data", function (req, res) {
    const query = 'select a.name, lon as longitude, lat as latitude, c.name as category from address a, categories c where a.category_id = c.id LIMIT 100';
    connection.query(query,
        (err, rows, fields) => {
        if (!err) {
            console.log('The solution is: ', rows);
            res.statusCode = 200;
            res.json(rows);
        } else {
            res.json({"code" : 400, "status" : "No data"});
        }
    });
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
