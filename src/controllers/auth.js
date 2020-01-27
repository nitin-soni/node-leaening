const express = require('express');
const router = express.Router();


router.post('/signin', (request, response)=>{
    response.send('Hello i am signin');
});

router.post('/signup', (request, response)=>{
    response.send('Hello i am signup');
});

router.post('/signup-password', (request, response)=>{
    response.send('Hello i am signup password');
});

module.exports = router;