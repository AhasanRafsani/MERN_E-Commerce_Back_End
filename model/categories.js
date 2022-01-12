const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
 
    category:{
        type:"String",
        require:true,
    }

},{timestamp:true});

const Category = mongoose.model("Category",categorySchema);

module.exports = Category;