const { body ,validationResult } = require("express-validator");
const category = require("../model/categories");

const categoryValidation = [
 body("category").notEmpty().withMessage("Product Category is reqired")
.isAlpha("en-US",{ignore:" -"}).withMessage("Category Name Must be Alphabet")
.custom(async(value)=>{
try{
const result = await category.findOne({category:value});
if(result){
    throw new Error("This Category is already exist");
}
}
catch(err){
    throw new Error(err.message);
}
}
)

];

const categoryValidatorHandler = (req,res,next)=>{


    const err = validationResult(req);
      const mappedError = err.mapped();
      if(Object.keys(mappedError).length===0){
        next();
      }
     else{
     res.json({errors:mappedError});
    
     }
}

module.exports={
    categoryValidation,
    categoryValidatorHandler,
}
