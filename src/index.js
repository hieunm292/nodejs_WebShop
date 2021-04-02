const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const sortMiddleware = require('./app/middlewares/SortMiddleware');

const route=require('./routes');
// connect to db
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


//sortMiddleware
app.use(sortMiddleware);

// app.use(guardXX);

// function guardXX(req,res,next){
//     if(['123','anhyeuem'].includes(req.query.pass)){
//         req.face="ABC";
//         return next();

//     }res.status(404).json({message:"Access Denied"});
// }

//http logger
app.use(morgan('combined'));

//template engine

app.engine(
  'hbs', handlebars({
      extname: '.hbs',
      helpers: {
          sum: (a, b) => a + b,

        sortable:(field,sort)=>{
            const sortType=field===sort.column ? sort.type : 'default';
          const icons={
              default:'oi oi-elevator',
              desc:'oi oi-sort-descending',
              asc:'oi oi-sort-ascending',
          };

          const types={
              default:'desc',
              desc:'asc',
              asc:'desc',
          };

          const icon =icons[sortType];
          const type =types[sortType];

            return `<a href="?_sort&column=${field}&type=${type}" class=""><span class="${icon}"></span></a>`;
        }
      },
  }),
);

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources','views')); 

//route init
route(app);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});