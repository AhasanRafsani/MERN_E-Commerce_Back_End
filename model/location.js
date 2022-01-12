const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
 
    location:{
        type:"String",
        require:true,
    }

},{timestamp:true});

const Location = mongoose.model("Location",locationSchema);

module.exports = Location;