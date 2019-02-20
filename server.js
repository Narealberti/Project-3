const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const users = require('./routes/api/users')
const orders = require('./routes/api/orders')
const passport = require('passport');
const app = express();
const path = require("path")
//DB Config

const db = require('./config/keys').mongoURI;
//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
//Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true }).
    then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

//Passport midleware
app.use(passport.initialize());
//Passport Config
require('./config/passport')(passport);


//Use Routes
app.use('/api/users', users);
app.use('/api/orders', orders);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(client / build));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server runing on port ${port}`))