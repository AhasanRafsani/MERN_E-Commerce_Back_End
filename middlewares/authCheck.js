const jwt = require("jsonwebtoken")
const authCheck = (req,res,next)=>{
 try{
  const {authorization} = req.headers;
  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token,process.env.JWT_SECRET)
  const {Userid,Username} = decoded;
  req.userId=Userid;
  req.userName=Username;
  console.log(req.userId);
  console.log(req.userName);
  next();
 } 
catch(err){
    console.log(err.message)
}



}

module.exports = authCheck;