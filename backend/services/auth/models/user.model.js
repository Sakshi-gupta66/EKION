import mongoose from "mongoose"

const userschema = new mongoose.Schema({
    firebaseUid:{
        type:String,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    email:string,
    avatar:string,
},{
    timestamps:true,
})

const user= mongoose.model("user",userschema)
export default user