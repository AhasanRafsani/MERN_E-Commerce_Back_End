const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    name:{
        type:String,
        require:true,
        trim:true,
    },
    email:{
        type:String,
        require:true,
        trim:true,
        lowercase:true,
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:["consumer","admin"],
        default:"consumer"
    }

},{timestamp:true})

const User = mongoose.model("User", userSchema);

module.exports = User;
