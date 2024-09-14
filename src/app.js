const express = require("express");
const app = express();
const cors = require('cors');
const userRouter = require("./routes/userRouter");

app.use(cors());

app.use(express.json());
app.use("/user", userRouter);
app.get("/",(req,res)=>{
    res.status(200).send("server is working");
})
module.exports = app;