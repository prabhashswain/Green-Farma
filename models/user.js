const { Schema,model } = require('mongoose');

const userSchema = new Schema({
    username : {
         type:String,
         required:true 
        },
    phone : {
         type:Number,
         required:true
         },
    password : { 
        type:String,
        required:true 
    },
    role : { 
        type:String,
        default:'seller' 
    }
})
module.exports = model('user',userSchema);