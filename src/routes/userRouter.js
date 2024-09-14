const express=require("express");
const Router=express.Router();
const {getalldata,insertuser,loginuser,getprofile}=require("../controllers/userController");
const authenticateToken = require("../middlewares/authMiddleware");

Router.get("/alldata",getalldata)
Router.post("/insertuser",insertuser)
Router.post("/loginuser",loginuser)
Router.get("/profile",getprofile)




module.exports = Router;