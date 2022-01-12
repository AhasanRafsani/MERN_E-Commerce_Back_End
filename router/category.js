const express = require("express");
const {addNewCategory, getAllCategory,getCategoryById } = require("../controller/category");
const { categoryValidation, categoryValidatorHandler } = require("../middlewares/categoryValidation")
const authCheck = require ("../middlewares/authCheck")
categoryRouter = express.Router();

categoryRouter.post("/addNewCategory",authCheck ,categoryValidation, categoryValidatorHandler,addNewCategory);
categoryRouter.get("/allCategory",authCheck ,getAllCategory)
categoryRouter.get("/getCategoryById/:id",authCheck ,getCategoryById)
categoryRouter.delete("/admin")


module.exports = categoryRouter;