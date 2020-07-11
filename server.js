const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const BlackList = require('./routes/BlackListRouter')
const app = express();
app.use(bodyParser.json());
const db = require('./config/keys').mongoURI;




mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, })
    .then(() => console.log("Mongo database connected"))
    .catch(err => console.log(err));



app.use('/api/blacklist', BlackList);
const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})