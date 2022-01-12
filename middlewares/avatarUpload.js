const uploader = require("../utlities/singleFileUpload");

function avatarUpload(req,res,next){

const upload = uploader();

upload.any()(req,res,(err)=>{

    
    if(err){
     
        res.status(500).json({
            errors:{
                avatar:{
                    msg:err.message
                }
            }
        })
    }
    else{
       
        next();
    }

})
}
module.exports = avatarUpload;