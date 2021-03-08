const Course = require('../models/Course');
//const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController{

    //GET/
    index(req, res){ 


        Course.find({}, function (err, courses) {
            // docs.forEach
            if(!err) {
                res.json(courses);
            } else{
            res.status(400).json({error : 'ERROR !!!'});}
          });

        //res.render('home');
    }

    //GET/search
    search(req, res){
        console.log(res.query);
        res.render('search');
    }
}

module.exports=new SiteController;
