const mongoose=require("mongoose");

mongoose.connect(process.env.DB_STRING)
.then((connectionInstance) => {
    console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
})
.catch((err) => {
    console.log(`MONGODB connection error : ${err.message}`);
});