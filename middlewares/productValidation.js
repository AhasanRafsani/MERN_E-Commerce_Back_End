
const {body,validationResult} = require("express-validator");

const productValidation=[
body("title").notEmpty().withMessage("This title field is require !")
.isAlpha("en-US",{ignore:" -"}).withMessage("Title Must be Alphabet !"),

body("price").notEmpty().withMessage("This price field is require !"),

body("brand").notEmpty().withMessage("This brand field is require !"),

body("quantityInStock").notEmpty().withMessage("This quantity In Stock field is require !"),

body("description").notEmpty().withMessage("This description field is require !"),

body("category").notEmpty().withMessage("This category field is require !"),


body("category").notEmpty().withMessage("This category field is require !"),

];

const productValidatorHandler = (req,res,next)=>{


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
  productValidation,
  productValidatorHandler,
}