const multer = require("multer");
const path = require('path');

function uploader(){
    
    const Image_Upload = `${__dirname}/../uploads/images`;

    const fileStorage = multer.diskStorage({
        destination:(req,file,cb)=>{
          cb(null,Image_Upload);
        },
        filename: (req,file,cb)=>{
          fileExt= path.extname(file.originalname);
          fileName=file.originalname.replace(fileExt," ").toLowerCase().split(" ").join("-")+"-"+Date.now();
          console.log(fileName+fileExt);
          cb(null,fileName+fileExt)
        }
       
    })
    
    const upload=multer({
        storage:fileStorage,
        limits:{
            fileSize:100000
        },
    
        fileFilter:(req,file,cb)=>{
            
            if(file.mimetype==="image/jpg" || file.mimetype==="image/jpeg" || file.mimetype==="image/png" ){
                cb(null,true)
               
            }else{
                cb(new Error("only jpg ,png and jpeg allowed "))
            }
        }
    
    });

    return upload; 

   }
module.exports = uploader;
