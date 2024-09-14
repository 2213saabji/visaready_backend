const app=require("./app");
const doteEnv=require("dotenv");
doteEnv.config();

require("../dbconnection/index")

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log("server start on port " + PORT);
})

