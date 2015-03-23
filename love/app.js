var express = require('express'),
    hbs = require('express-hbs'),
    path = require('path'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    controllers = require('./controllers'),
    config = require('./config'),
    helper = require('./helpers/register');

var app = express();

console.log("current running environment：",app.get('env'));

// Global values
app.locals = {
    version     : config.app.version,
    title       : config.app.title,
    author      : config.app.author,
    settings    : {}
};

// view engine setup
app.engine('hbs', hbs.express3({
    viewsDir    : path.join(__dirname, 'views'),
    partialsDir : path.join(__dirname, 'views/partials'),
    layoutsDir  : path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data
app.use(express.static(path.join(__dirname, 'public')));

// url map
app.use('/', controllers.home);
app.use('/home', controllers.home);
app.use('/photo', controllers.photo);
app.use('/blog', controllers.blog);
app.use('/contact', controllers.contact);
app.use('/image', controllers.image);

module.exports = app;
