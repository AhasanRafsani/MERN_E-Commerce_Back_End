
const { JsonWebTokenError } = require("jsonwebtoken");
const category = require("../model/categories");

const addNewCategory = async ( req , res)=>{
  
try{
 const newCategory = new category({
     category:req.body.category
 });
 const result = await newCategory.save();
       res.status(200).json({
           sucess:"Sucessfuly add this category"
       })
}
catch(error){


}

}
const getAllCategory = async( req,res )=>{
   try{
      
      const result = await category.find()

        if(result){
              res.status(200).json(result);
        }
    
    }
catch(err){

    }
}


const getCategoryById = async(req,res)=>{
try{
      console.log(req.params)
    const Id = req.params.id.replace(":","")
     const result = await category.findById(Id)
     if(result){
        console.log(result)
        res.status(200).json(result);
  }
}
catch(err){
 console.log(err.message)
}

}

module.exports = {
    addNewCategory,
    getAllCategory,
    getCategoryById


}