const newsRouter=require('./news');
const meRouter=require('./me');
const courseRouter=require('./courses');
const siteRouter=require('./site');
const authRoute=require('./auth')

function route(app){

    app.use('/auth',authRoute)
    app.use('/news',newsRouter);
    app.use('/me',meRouter);
    app.use('/courses',courseRouter);
    app.use('/',siteRouter);
}

module.exports=route;