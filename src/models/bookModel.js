const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type:String, 
               required:true},

    authorName: String, 
    tags: ["horror","romance","motivation"],
    stockAvailable:Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
  totalPages:String

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
