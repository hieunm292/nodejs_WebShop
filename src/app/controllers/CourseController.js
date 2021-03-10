const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController{

    //GET/course:slug
    show(req, res,next){
        Course.findOne({slug: req.params.slug})
        .then( course => {
            res.render('courses/show',{course :mongooseToObject(course)});
        })
        .catch(next)
    }

    //GET/course:create
    create(req, res){
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course.save()
              .then(()=>res.redirect('/'))
              .catch((error)=>{
                  
              })

            // .save()
            // .then(() => res.redirect('/me/stored/courses'))
            // .catch((error) => {});
        //res.json(req.body)
    }
}

module.exports=new CourseController();
