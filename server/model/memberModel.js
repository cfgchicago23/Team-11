const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Member Schema 
const MemberSchema = new Schema({
    uid:{
        type:String,
        maxlength:100,
        required:true,
        unique:true
    },
    // password:{
    //     type:String,
    //     maxlength:100,
    //     required:true
    // },
    firstname:{
        type:String,
        maxlength:40,
        default:""
    },
    lastname:{
        type:String,
        maxlength:40,
        default:""
    }, 
    start:{
        type:Date,
        default:Date.now
    }, 
    clubs:{
        type:Array,
        default:""
    }, 
    email:{
        type:String,
        default:""
    }, 
});

const Member = mongoose.model("member", MemberSchema);
module.exports = Member;