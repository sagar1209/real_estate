
MONGO_URI = 'mongodb+srv://User:User123@cluster0.6whd1ee.mongodb.net/real?retryWrites=true&w=majority';


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended :true}));


//data base
mongoose.connect(MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successfull");
}).catch((e)=>{
    console.log(e);
});

const HouseSchema = new mongoose.Schema({
    title : String,
    address : String,
    url : String

});
const House = mongoose.model("House",HouseSchema);

// houses.forEach((house) => {
//     const newhouse = new House({
//         title : house.title,
//         address: house.address,
//         url : house.url ,
//     })
//     newhouse.save();
// });

app.get("/",(req,res)=>{
    House.find({})
    .then((items)=>res.json(items))
    .catch((err)=>console.log(err));

});

app.listen(3005,function() {
    console.log("running on port 3005");
    
  })