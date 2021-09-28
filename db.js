const mongoose =require("mongoose");

var mangoURL='mongodb+srv://moh:mony88888@cluster0.mkdoh.mongodb.net/mern-rooms';

//mongoose.connect=(mangoURL,{useUnifiedTopology:true,useNewUrlParser:true});
mongoose.connect('mongodb+srv://moh:mony88888@cluster0.mkdoh.mongodb.net/mern-rooms', { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection

connection.on('error' , ()=>{

    console.log('Mongo DB connection Fail')
})

connection.on('connected' , ()=>{

    console.log('Mongo DB connection successful')
})

module.exports = mongoose