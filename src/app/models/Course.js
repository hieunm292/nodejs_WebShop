const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required:true},
        description: { type: String , maxLength : 255 },
        image: { type: String, maxLength : 255 },
        author: { type: String, maxLength : 255},
        videoId: { type: String, required: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
            timestamps: true,
    }
);

// Add slug plugins
mongoose.plugin(slug);


module.exports = mongoose.model('Course', Course);