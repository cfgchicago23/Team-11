const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Club Schema 
const PostSchema = new Schema({
    pid:{
        type:Number,
        maxlength:100,
        required:true,
        unique:true
    },
    text:{
        type:String,
        maxlength:40,
        default:""
    },
    tags:{
        type:Array,
        maxlength:40,
        default:null
    }, 
    date:{
        type:Date,
        default:Date.now
    },  
});

const Post = mongoose.model("post", PostSchema);
module.exports = Post;