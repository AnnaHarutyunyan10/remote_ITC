const mongo = require('mongodb').MongoClient;
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const places = require('.././dataBase/places');

const app = express();

const url = 'mongodb://localhost:27017/places';
const port = 3006;

mongo.connect(url, (err, db) => {
    const collection = db.collection('places_names');
    
    collection.insertMany(places, (err, result) => {
        if (err) {
            console.log('Connection error: ', err);
            throw err;
        }

        console.log(result.ops);

        db.close();
    })
})

app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

app.get('/places', function(req, res) {
    res.send(places);
});

/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    next();
});*/

app.use(cors());

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.render('error');
});

const server = app.listen(port, (err) => {
    if (err) {
        return console.log(`Error: ${err}`)
    }

    console.log(`Server listening on port ${server.address().port}`);
});