const path = require('path');
const express = require('express');
const compression = require("compression");
// const mongoose = require('./configs/mongoose');
const sequelize = require('./configs/sequelize');
const _port = 4100;
const publicDirPath = path.join(__dirname, '../application/dist/application');
const app = express();

var user = require('./controllers/user');

app.set('view engine', 'hbs');
app.use(compression());
// app.use(express.static(publicDirPath))
// app.server.get('*.*', express.static(publicDirPath, {maxAge: '1y'}));

app.get('*.*', express.static(publicDirPath, {maxAge: '1y'}));

// ---- SERVE APLICATION PATHS ---- //
app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: publicDirPath});
});

app.use('/user', user);

app.get('/', (request, response)=>{
    response.send('Hello');
});


app.listen(_port, function(){
    console.log('Listening on port ' + _port);
});