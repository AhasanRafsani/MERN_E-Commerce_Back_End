const location = require("../model/location");

const addNewLocation = async ( req , res)=>{

try{
    const loc = req.body.location;

 const newLocation = new location({ location : loc });
 const result = await newLocation.save();
}
catch(error){


}

}

const getAllLocation = async (req,res)=>{

    try{
        
    const result = await location.find();
    if(result){
    res.status(200).json(result);
    }
    }
    catch(error){
    
    
    }

}



module.exports = {
    
    addNewLocation,
    getAllLocation

}


