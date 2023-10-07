const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Module Schema 
const ModuleSchema = new Schema({
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
    type:{
        type:String,
        maxlength:40,
        default:""
    }, 
    cid:{
        type:Number,
        default:0
    }, 
    lessons:{
        type:Array,
        default:""
    },
});

const Module = mongoose.model("module", ModuleSchema);
module.exports = Module;