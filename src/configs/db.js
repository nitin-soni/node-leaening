const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27019/test', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log(err)
});
module.exports = mongoose;