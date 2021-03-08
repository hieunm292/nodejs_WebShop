const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength : 255},
        description: { type: String , maxLength : 255 },
        image: { type: String, maxLength : 255 },
        author: { type: String, maxLength : 255},
        // videoId: { type: String, required: true },
        // level: { type: String },
        // slug: { type: String, slug: 'name', unique: true },
        createAt:{type:Date,default:Date.now},
        updateAt:{type:Date,default:Date.now},
    }
    // {
    //     timestamps: true,
    // },
);

//Add plugins
// mongoose.plugin(slug);
// Course.plugin(mongooseDelete, {
//     deletedAt: true,
//     overrideMethods: 'all',
// });

module.exports = mongoose.model('Course', Course);