const path = require('path');
const express = require('express');

const publicDirPath = path.join(__dirname, '../public');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static(publicDirPath))


app.listen(3000, function(){
    console.log('Listening ')
});

app.get('/', (req, res)=>{
    // res.send('<h1>Hello World</h1>');
    // res.send({"name":"nitin"});
    res.render('index', {'title':'hello'});
});