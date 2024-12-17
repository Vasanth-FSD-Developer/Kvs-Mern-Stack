import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique : true,
    },
    email : {
        type: String,
        required: true,
        unique : true,
    },
    password : {
        type: String,
        required: true,
    },
    avatar :{
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png",

    },
},{timestamps:true});

const User = mongoose.model('user', userSchema);

export default User;