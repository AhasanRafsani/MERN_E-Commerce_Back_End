const user = require("../model/people");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


async function addNewUser(req,res){
try{
    const hashPassword = await bcrypt.hash(req.body.password,10);
     
    const newUser = new user({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:hashPassword,
        gender:req.body.gender
    })
       await newUser.save();

      res.status(200).json({
         message:"user insert sucessfully !",
     })
    
}
catch(err){
res.status(400).json({
    error:{
        common:{
            msg:"Unknown Error Occured",
        }
    }
})
}


}


async function userLogin(req,res){

try {
      const result = await user.findOne({name:req.body.name})
      if(result){
        const isValidPassword = await bcrypt.compare(req.body.password,result.password);
        if(isValidPassword){
            
          const token = jwt.sign({Userid:result._id,Username:result.name},process.env.JWT_SECRET,{expiresIn:"2h"})

          res.status(200).json({ 
                                 
                              userId:result._id,
                              userName:result.name,
                              userEmail:result.email,
                              userPhone:result.phone,
                              userGender:result.gender,
                              userRole:result.role, 
                              message:"Authentication Sucess",
                              token:token
                            })
          
        }
        else{
            
            res.status(401).json({
                error: "authentication2 failed"
            })  
        }
      }
      else{
          res.status(401).json({
              error: "authentication failed"
          })
      }

    
} catch (error) {
    
}
}


async function getAllUser(req,res){

    try{
    const result = await user.find();
    if(result){
       res.status(200).json(result);
       }
    }catch(err){

     }

}





module.exports ={
    addNewUser,
    userLogin,
    getAllUser
}