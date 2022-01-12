const {body ,validationResult} = require("express-validator");
const user = require("../model/people");

const userValidation = [

 body("name")
.isLength({min:3}).withMessage("At least three character name is required")
.isAlpha("en-US",{ignore:" -"}).withMessage("Name must be alphabet")
.trim(),

/*check("email").isEmail().withMessage("Invalid Email Address")
//.trim()/
.custom(async(value)=>{
    try{
    const user = await user.findOne({email:value});
    if(user){
        throw new Error("This Email already exist");
    }
}
catch(err){
    throw new Error(err.message);
}

}),*/
body("phone")
.notEmpty().withMessage("phone number is reqired")
.isMobilePhone("bn-BD",{strictMode:true}).withMessage("mobile Number must be valid bangladeshi mobile number")
.custom(async(value)=>{
    try{
    const result = await user.findOne({phone:value});
    if(result){
        throw new Error("This phone number already exist");
    }
    }catch(err){
        throw new Error(err.message); 

    }
}),
body("password").notEmpty().withMessage("password is reqired")
.isStrongPassword().withMessage("At least 8 character 1 uper case 1 lower case 1 special character i required"),

body("gender").notEmpty().withMessage("This gender is required"),

];

const userValidatorHandler = (req,res,next)=>{


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
    userValidation,
    userValidatorHandler,
}