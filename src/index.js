const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./config/db');
db.connect();
const { engine } = require('express-handlebars');
const { render } = require('node-sass');
const port = 3000;
const app = express();
const routes = require('./resources/routes');
//http logger morgan
app.use(morgan('combined'));
//urlencoded + json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

//Route init
routes(app);
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
