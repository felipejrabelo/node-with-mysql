const express = require('express');
const bodyParser = require('body-parser');
const nomesRouter = require('./routes/names');

var app = express();

app.use(bodyParser.json());
app.use('/nomes', nomesRouter);

app.listen(3000);