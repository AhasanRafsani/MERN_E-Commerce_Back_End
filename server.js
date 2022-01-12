const express = require("express");
const connectDb = require("./config/db");
const cors = require("cors");
const productRouter = require("./router/product");
const categoryRouter = require("./router/category");

const locationRouter = require("./router/location");
const peopleRouter = require("./router/people");
const env = require("dotenv");

env.config();
console.log(process.env.NODE_ENV)


const app = express();
connectDb();

app.use(express.static(`${__dirname}/./uploads`));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/product",productRouter);
app.use("/category",categoryRouter);
app.use("/location",locationRouter);
app.use("/user",peopleRouter);


app.use((err,req,res,next)=>{

    if(err){
       res.status(500).send(err.message)
    }
    else{
        res.send("sucess");
    }

});
app.listen(8080,()=>{

    console.log("connect server");

})