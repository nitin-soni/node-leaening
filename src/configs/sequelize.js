const Sequelize = require('sequelize');

//setting the db connection
const sequelize = new Sequelize('os-social', 'root', 'codewell!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3308
});

//check if connected to db success or not
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error( err);
        throw new Error('Unable to connect to the database.');
    });

module.exports = sequelize;