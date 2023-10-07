import mongoose from "mongoose";
const Schema = mongoose.Schema;

//ClubRequest Schema 
const ClubRequestSchema = new Schema({
    id:{
        type:Number,
        maxlength:100,
        required:true,
        unique:true
    },
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
    town:{
        type:String,
        default:Date.now
    }, 
    email:{
        type:String,
        default:""
    }, 
});

const ClubRequest = mongoose.model("clubrequest", ClubRequestSchema);
module.exports = ClubRequest;