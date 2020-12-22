 const mongoose = require('mongoose')

 const Schema = mongoose.Schema

const TaskShema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
     }
 }) 

 model = mongoose.model('tasks', TaskShema)
 module.exports = model
