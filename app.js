const express       = require('express');
const morgan        = require('morgan');
const mongoose      = require('mongoose');
const bodyParser    = require('body-parser');

const app = express();

const port = 3000;



const dbURI = 'mongodb+srv://Alaref:2212000@cluster0.atouh.mongodb.net/subs?retryWrites=true&w=majority'
mongoose.connect(dbURI , { useNewUrlParser: true ,  useUnifiedTopology: true , useCreateIndex: true })


app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'))

module.exports = app;