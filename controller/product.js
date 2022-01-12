const product = require("../model/product");

const adminAddNewProduct = async (req,res)=>{
    const image=req.files[0].path;
    try{
    const addProduct = new product({
        title:req.body.title,
        price:req.body.price,
        brand:req.body.brand,
        quantityInStock:req.body.quantityInStock,
        description:req.body.description,
        category:req.body.category,
        avatar:image
    }) ;
    await addProduct.save();
       res.status(200).json({
           message:'Product add sucessfully'
       })
     }
     catch(err){
        console.log(err);
     }
}

const getAllProduct= async(req,res)=>{
    try{
      const result = await product.find();
      if(result){
          res.status(200).json(result);
      }
    }
    catch(err){
              console.log(err);
    }
}

const consumerGetProductById = async(req,res)=>{
    try{
          console.log(req.params)
          const Id = req.params.id.replace(":","")
          const result = await product.findById(Id)
         if(result){
            console.log(result)
            res.status(200).json(result);
      }
    }
    catch(err){
     console.log(err.message)
    }
    
    }


module.exports = {adminAddNewProduct,
                 getAllProduct,
                 consumerGetProductById
  
                 };