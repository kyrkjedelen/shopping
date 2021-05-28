require('dotenv').config();

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'test'
});
connection.connect();

const express = require('express');
const app = express();
const PORT = 8080;
app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);

app.use(express.static('public'));

app.get('/test', (req, res) => {
    res.status(200).send([
        'test0', 'test1'
    ])
});

connection.connect(error => {
    if (error) throw error;
    console.log('Connected!');
    const sql = `
        SELECT *
        FROM testtable;
    `;
});