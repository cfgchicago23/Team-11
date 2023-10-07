const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Club Schema 
const ClubSchema = new Schema({
    uid:{
        type:String,
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
        type:String,
        ddefault:""
    }, 
    members:{
        type:Array,
        default:""
    }, 
});

const Club = mongoose.model("club", ClubSchema);
module.exports = Club;