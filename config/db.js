const mongoose = require('mongoose');

const db = async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/crud_app");
        console.log("connected");
    }catch(error){
        console.log(error);
    }
};

module.exports = db;
