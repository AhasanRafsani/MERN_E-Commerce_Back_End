
const mongoose = require("mongoose");

const connectDb = async ()=>{
try {
  
  const conn = await mongoose.connect('mongodb://localhost/Ecommers');
    console.log('connected with database');

} catch (error) {

    console.log(`error ${error}`);
    
}

}

module.exports = connectDb;