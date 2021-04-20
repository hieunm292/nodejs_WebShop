const express = require('express');
const router = express.Router();

const courseController=require('../app/controllers/CourseController');
const validate=require('../app/validate/createProductValidate');

router.get('/create', courseController.create);
router.post('/store', validate.postCreate , courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions',courseController.handleFormActions);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id/deleteForever', courseController.deleteForever);
router.delete('/:id', courseController.softDelete);
router.get('/:slug', courseController.show);


module.exports=router;