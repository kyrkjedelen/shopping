require('dotenv').config();

const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'shopping'
});
db.connect();

const express = require('express');
const app = express();
const server = {
    port: 6969
}
app.listen(
    server.port,
    () => console.log(`it's alive on http://localhost:${server.port}`)
);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.post('/api', (request, response) => {
    const sqlCode = request.body.sql;
    console.log(sqlCode);
    db.connect((error) => {
        if(error) throw error;
        db.query(sqlCode, (error, databaseResult) => {
            if(error) throw error;
            return response.json(databaseResult);
        });
    })
});

app.post('/test', (request, response) => {
    console.log(request.originalUrl);
    console.log(request.body);
    response.redirect('/');
    console.log('Ferdig');
});