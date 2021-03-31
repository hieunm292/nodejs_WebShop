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
    }

    //GET/course:id/edit
    // edit(req,res,next){
    //     Course.findById(req.params.id)
    //     .then(course=>res.render('courses/edit',{course :mongooseToObject(course)}))
    //     .catch(next)
    // }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    //PUT/course:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //DELETE/course:id
    delete(req, res, next) {
        Course.delete({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }

    //DELETE/course:id/deleteForever
    deleteForever(req, res, next) {
        Course.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }

    //PATCH/course:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //POST//courses/handle-form-actions
    handleFormActions(res,req,next){
        switch(res.body.action){
            case 'deleteCheckbox':
                Course.delete({_id: {$in:res.body.courseIds}})
                 .then(() => req.redirect('back'))
                 .catch(next);
                break;
            default:
                req.json({message:'Action is not valid !'});

        }
    }
}

module.exports=new CourseController();
