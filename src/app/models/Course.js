const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        _id : { type:Number },
        name: { type: String, required:true},
        description: { type: String , maxLength : 255 },
        image: { type: String, maxLength : 255 },
        author: { type: String, maxLength : 255},
        videoId: { type: String, required: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
            _id : false,
            timestamps: true,
    }
);

//Custom query helpers
CourseSchema.query.sortable=function(req){
    if(req.query.hasOwnProperty('_sort')){

        const isValidType = ['asc','desc'].includes(req.query.type);

        return this.sort({
          //   if isValidType => get req.query.type else not get default = 'desc'
            [req.query.column] : isValidType ? req.query.type : 'desc',
          //  [req.query.column] : req.query.type 
        });
    }
    return this;
}

// Add slug plugins
mongoose.plugin(slug);
CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all', });


module.exports = mongoose.model('Course', CourseSchema);