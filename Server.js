const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const expressHandlebars = require('express-handlebars');
const paths = require('path');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3001;



const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
const hbs = expressHandlebars.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app.get('/public', (req, res) => { res.render('index') });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(paths.join(__dirname, 'public')));
app.use("/",routes);



app.listen(PORT, () => {
    console.log('Now listening');
    sequelize.sync({ force: false })});


 
