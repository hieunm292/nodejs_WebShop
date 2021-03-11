const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const route=require('./routes');
// connect db
const db=require('./config/db');
db.connect();

const { TRUE } = require('node-sass');
const app = express();
const port = 3000;

//use static folder
app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded(extended= true));
app.use(express.json());

app.use(methodOverride('_method'));

//http logger
//app.use(morgan('combined'));

//template engine
// app.engine('hbs', handlebars(
//   {extname:'.hbs',
//    helpers: {
//     sum: (a, b) => a + b,
//   },
// }
// ));

app.engine(
  'hbs',
  handlebars({
      extname: '.hbs',
      helpers: {
          sum: (a, b) => a + b,
      },
  }),
);

app.set('view engine', 'hbs');
//app.set('views',path.join(__dirname,'resources/views')); 
app.set('views',path.join(__dirname, 'resources', 'views')); 

//route init
route(app);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});