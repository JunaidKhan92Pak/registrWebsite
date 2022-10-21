const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userData")
.then(()=>{
    console.log(`Connected Succesfully`);
})
.catch((err)=>{
     console.log(`Error Error = ${err}`);
})

 
