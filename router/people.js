const express = require("express");
const { userValidation , userValidatorHandler } = require("../middlewares/userValidation")
const authCheck = require ("../middlewares/authCheck")
const {addNewUser,userLogin,getAllUser} = require("../controller/people")

const peopleRouter = express.Router();

peopleRouter.post("/signup",userValidation , userValidatorHandler, addNewUser)
peopleRouter.post("/login",userLogin)
peopleRouter.get("/allUser",authCheck,getAllUser)

module.exports = peopleRouter;