const user =require("../models/userSchema");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


const getalldata=async(req,res)=>{
    try{
        const data= await user.find();
        res.status(200).send({message:"success",data:data});
    }
    catch(err){
        res.status(400).send({message:err.message});

    }
}

const insertuser=async(req,res)=>{
    const {password}=req.body
    const salt=bcrypt.genSaltSync(10)
    const securepassword=bcrypt.hashSync(password,salt);
    try {
        await user.create({...req.body,password:securepassword});
        res.status(200).send({ message: "success", data: {...req.body,password:securepassword} });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const loginuser=async(req,res)=>{
    const {email,password}=req.body
    try {
        const userValid= await user.findOne({email})
        if(userValid){
            //match password
            const isValidPassword=bcrypt.compareSync(password,userValid.password);
            if(isValidPassword){
                //generate jwt
                const token=jwt.sign({
                    userId:userValid._id,
                    email:userValid.email
                },process.env.SECRET_KEY,{
                    expiresIn:60*60*24 // in sec => 60sec*60sec*24sec means 24 days
                })
                res.status(200).send({ message: "Logged in successfully",token:token, data:userValid });
            }
            else{
                res.status(404),send({Status:"Fail",message:"Password is Wrong"})
            }
        }
        else{
            res.status(404),send({Status:"Fail",message:"Not a valid user"})
            
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
    
}

const getprofile=async(req,res)=>{
    const {authorization}=req.headers
    const token=authorization.split(" ")[1];
    try{
        const userdata=jwt.verify(token,process.env.SECRET_KEY)
        const {userId}=userdata;
        
        user.findById(userId)
        .select("-password")
        .then((data)=>{
            res.status(200).send({Status:"success",data});
            
        })
    }
    catch(err){
        res.status(500).send({Status:"fail", message: err.message });
    }
}

module.exports={getalldata,insertuser,loginuser,getprofile};