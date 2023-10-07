import mongoose from "mongoose";
const Schema = mongoose.Schema;

//ClubLead Schema 
const ClubLeadSchema = new Schema({
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
        type:String,
        default:""
    }, 
    email:{
        type:String,
        default:""
    }, 
});

const ClubLead = mongoose.model("clublead", UserSchema);
module.exports = ClubLead;