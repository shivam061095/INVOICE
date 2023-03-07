const mongoose=require("mongoose")


const userSchema= new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    discounted_price:{type: Number, required: true },
    image_url:{type:String,required:true},

    quantity:{type:Number,required:true}||1,


})

const UserModel= mongoose.model("product",userSchema)


module.exports={UserModel}