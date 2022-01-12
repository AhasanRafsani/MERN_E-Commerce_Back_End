const express = require("express");
const { addNewLocation , getAllLocation } = require("../controller/location");
const authCheck = require ("../middlewares/authCheck")
const { locationValidation, locationValidatorHandler} = require("../middlewares/locationValidation")
locationRouter = express.Router();

locationRouter.post("/addNewLocation", locationValidation, locationValidatorHandler,addNewLocation);
locationRouter.get("/getAllLocation",authCheck, getAllLocation );
locationRouter.put("/admin")
locationRouter.delete("/admin")


module.exports = locationRouter;