
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile:Number,
    emailId: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    gender:{
        type:String,
        enum:['male','female','others']
    },
    age:Number,
    posts: {
        type:[],
        default:[]
    }
}, {timestamps:true})

module.exports = mongoose.model('User', userSchema)