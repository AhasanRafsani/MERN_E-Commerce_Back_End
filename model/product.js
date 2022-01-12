const mongoose = require("mongoose");

const productSchema = mongoose.Schema({ 
  
    title:{
        type: String,
        require: true,
    } ,
    price:{
        type: Number,
        require: true,
    },
    brand:{
        type: String,
        require: true, 
    },
    quantityInStock:{
        type: Number,
        require: true,

    },
    description:{
        type: String,
        require: true, 
    },
    category:{
        type: String,
        require: true, 
    },
    avatar:{
        type:String,
        require: true, 
    },
    status:{
        type: String,
        enum: ["active","inactive"] ,
        default: "active" ,
    }



},{timestamp:true})

const Product =  mongoose.model("Product" , productSchema);

module.exports =  Product;