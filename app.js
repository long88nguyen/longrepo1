const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const app = express();
const app1 = express();
const app2 = express();

const port = process.env.PORT || 3000;
const port1 = process.env.PORT || 3001;
const port2 = process.env.PORT || 3002;

require('dotenv').config();

app.use(express.urlencoded( { extended: true } ));
app1.use(express.urlencoded( { extended: true } ));
app2.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app1.use(express.static('public'));
app2.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.json());
app1.use(expressLayouts);
app1.use(bodyParser.json());
var urlencoded_body_parser = bodyParser.urlencoded({
  extended: true
});
app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));
app1.use(cookieParser('CookingBlogSecure'));
app1.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());
app.use(urlencoded_body_parser);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//admin
app1.use(flash());
app1.use(fileUpload());
app1.use(urlencoded_body_parser);
app1.set('layout', './layouts/mainadmin');
app1.set('view engine', 'ejs');

//login
app2.set('view engine', 'ejs');

const routes = require('./server/routes/recipeRoutes.js');
const { response } = require('express');
app.use('/', routes);
app1.use('/', routes);

app2.get("/admin/login",(req,res)=>{
  res.render('admin/login');
})
app1.get("/admin/categories",(req,res)=>{
  res.render('admin/adcategories');
  
})
app1.get("/admin/recipe",(req,res)=>{
  res.render('adrecipe');
  
})

app.listen(port, ()=> console.log(`Listening to port ${port}`));
app1.listen(port1, ()=> console.log(`Listening to port ${port}`));
app2.listen(port2, ()=> console.log(`Listening to port ${port}`));