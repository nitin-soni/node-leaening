const path = require('path');
const express = require('express');
const compression = require("compression");
const logger = require('morgan');
const bodyParser = require('body-parser');

//import controller routes
var userRoutes = require('./controllers/user');
var authRoutes = require('./controllers/auth');


// const mongoose = require('./configs/mongoose');
// const sequelize = require('./configs/sequelize');
const _port =  4100;
const adminPublicDirPath = path.join(__dirname, '../application/dist/application');
const appPublicDirPath = path.join(__dirname, '../my-app/build');


const app = express();


app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(compression());
// app.use(express.static(adminPublicDirPath))
app.use('/admin', express.static(adminPublicDirPath, {maxAge: '1y'}));
app.use('/', express.static(appPublicDirPath, {maxAge: '1y'}));


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (request, response)=>{
    response.send('Hello');
});


app.listen(_port, function(){
    console.log('Listening on port ' + _port);
});