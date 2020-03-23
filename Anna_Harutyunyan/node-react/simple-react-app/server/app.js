const express = require('express');
//const config = require('config');
const mongoose = require('mongoose');

const app = express();
//const PORT = config.get('port') || 3001;

const options = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
};
//const url = 'mongodb://localhost:27017/db';

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
app.use(allowCrossDomain);

app.use(express.json({ extended: true }));

app.use('/', require('./routes/users'));  

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/db', options);
        app.listen(3001, () => {
            console.log('Server started on ${PORT} port');
        });
    } catch(e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();