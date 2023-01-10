const express = require("express");
const mongoose = require("mongoose");
//const adminRouter = require("./routes/admin.js");
//const authRouter = require("./routes/auth.js");
//const busRouter = require("./routes/bus");
//const userRouter = require("./routes/user");

const DB="mongodb+srv:URI"
const PORT = 8000;
const app=express();

app.use(express.json());
//app.use(authRouter);
//app.use(adminRouter);
//app.use(busRouter);
//app.use(userRouter);

mongoose.connect(DB).then( ()=> {
    console.log("Connected successfully");
}).catch( (e) =>{
    console.log(e)
});

app.listen(PORT,'0.0.0.0',() => {
    console.log(`connected at port ${PORT}`);
});
