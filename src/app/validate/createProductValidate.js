const Course = require('../models/Course');

class createProductValidate{
    postCreate(req,res,next){
        var errors=[];
            const course = new Course(req.body);
            if(!req.body.name){
                errors.push('Name is required ')
            }

            if(!req.body.videoId){
                errors.push(' Video ID is required !')
            }

            if(errors.length){
                res.render('courses/create',{errors : errors, values : req.body});
                return;
            }
            next();
    }
}

module.exports=new createProductValidate();