const { body ,validationResult} = require("express-validator");
const location = require("../model/location");

const locationValidation = [
 body("location").notEmpty().withMessage("Location is Reqired")
.isAlpha("en-US",{ignore:" -"}).withMessage("Location Name Must be Alphabet")
.custom(async(value)=>{
try{
const result = await location.findOne({location:value});
if(result){
    throw new Error("This Location is already exist");
}
}
catch(err){
    throw new Error(err.message);
}
}
)

];

const locationValidatorHandler = (req,res,next)=>{


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
    locationValidation,
    locationValidatorHandler
}