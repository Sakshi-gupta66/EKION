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
    email: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
  },
},{
    timestamps:true,
})

const user= mongoose.model("user",userschema)
export default user