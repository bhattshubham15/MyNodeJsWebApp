const mongoose = require('mongoose')

const causeSchema = mongoose.Schema;
const causeModel = causeSchema({
    _id: {
        type: Number,
        required: true
    },
    title: {
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true,
      }
})
exports.causeModel =  mongoose.model('Cause', causeModel)