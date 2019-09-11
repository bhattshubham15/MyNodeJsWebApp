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

const imageSchema = mongoose.Schema;
const imageModel = imageSchema({
    url: {
        type: String,
        required: true
      },
      filename: {
        type: String,
        required: true
      },
      imageType: {
        type: String,
        required: true
      }
})
exports.causeModel =  mongoose.model('Cause', causeModel)
exports.imageModel = mongoose.model('image', imageModel)
