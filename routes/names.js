const express = require('express');
const Router = express.Router();
const mySqlCon = require('../con');

Router.get('/', (req, res) => {
    mySqlCon.query('select * from names', (err, rows, fields) => {
        if(err) {
            console.log(err);
            return;
        }
        res.send(rows);
    });
});

Router.get('/nome', (req, res) => {
    mySqlCon.query('select nome from names', (err, rows, fields) => {
        if(err) {
            console.log(err);
            return;
        }
        res.send(rows);
    });
});

Router.get('/id', (req, res) => {
    mySqlCon.query('select id from names', (err, rows, fields) => {
        if(err) {
            console.log(err);
            return;
        }
        res.send(rows);
    });
});

module.exports = Router;