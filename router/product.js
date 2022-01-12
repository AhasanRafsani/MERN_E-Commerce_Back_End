
const{ adminAddNewProduct ,getAllProduct, consumerGetProductById}  = require("../controller/product");
const avatarUpload = require("../middlewares/avatarUpload");
const authCheck = require ("../middlewares/authCheck")
const { productValidation,productValidatorHandler} = require("../middlewares/productValidation")
const express = require("express");
const productRouter = express.Router();

productRouter.post("/addNewProduct",authCheck,avatarUpload, productValidation,productValidatorHandler,adminAddNewProduct);
productRouter.get("/getAllProduct",authCheck,getAllProduct);
productRouter.get("/consumerGetProductById/:id",consumerGetProductById)
module.exports = productRouter;