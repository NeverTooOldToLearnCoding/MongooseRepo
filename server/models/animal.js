const mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
    animal:  { type: String, required: true, minlength: 1},
    food: { type: String, required: true, minlength: 1},
    imgurl: { type:String, required:true, minlength: 1 },
    personality: { type: String, required: true, minlength: 1}},
    {timestamps: true });

var Animal = mongoose.model('Animal', AnimalSchema); // We are retrieving this Schema from our Models, named 'Animal'
module.exports = {Animal:Animal};