const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Club Schema 
const ClubSchema = new Schema({
    uid:{
        type:Number,
        maxlength:100,
        required:true,
        unique:true
    },
    name:{
        type:String,
        maxlength:40,
        default:""
    },
    location:{
        type:String,
        maxlength:40,
        default:""
    }, 
    lid:{
        type:Number,
        default:0
    }, 
    members:{
        type:Array,
        default:""
    }, 
});

const Club = mongoose.model("club", ClubSchema);
module.exports = Club;