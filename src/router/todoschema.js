const  mongoose = require("mongoose")
const mongoose = require("mongoose")

const schema = mongoose.schema;

const todoSchema = new schema({
    activity: {
        type: string,
        required: true
    },

    isComleted: {
        
        type: Boolean,
        required: true,
        default:false
    }
})
const Todo= mongoose.model("todoschema", todoSchema)
module.exports= Todo
