const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController{

    //GET/
    index(req, res,next){ 
        // Course.find({}, function (err, courses) {
        //     if(!err) {
        //         res.json(courses);
        //     } else{
        //     res.status(400).json({error : 'ERROR !!!'});}
        //   });

        Course.find({})
            .then(courses => {
                res.render('home',{courses:multipleMongooseToObject(courses)});
            })
            .catch(error => next(error));
    }

    //GET/search
    search(req, res){
        console.log(res.query);
        res.render('search');
    }
}

module.exports=new SiteController;
