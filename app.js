const express       = require('express');
const morgan        = require('morgan');
const mongoose      = require('mongoose');
const bodyParser    = require('body-parser');
const webRoutes     = require('./routes/mainRoute')

const app = express();

const port = 3000;

const dbURI = 'mongodb+srv://Alaref:2212000@cluster0.atouh.mongodb.net/subs?retryWrites=true&w=majority'
mongoose.connect(dbURI , { useNewUrlParser: true ,  useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use((req,res , next) => {
    console.log('---------- NEW REQUEST MADE ----------');
    next();
});

app.set('view engine' , 'ejs');

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}));

app.use('/' , webRoutes)

app.use( (req, res) => {
    res.status(404).render('404');
});

module.exports = app;