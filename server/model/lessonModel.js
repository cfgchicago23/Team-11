const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Lesson Schema 
const LessonSchema = new Schema({
    id:{
        type:Number,
        maxlength:100,
        required:true,
        unique:true
    },
    title:{
        type:String,
        maxlength:40,
        default:""
    },
    mid:{
        type:Number,
        maxlength:40,
        default:0
    },  
    content:{
        type:String,
        default:"https://www.google.com/"
    },
});

const Lesson = mongoose.model("lesson", LessonSchema);
module.exports = Lesson;