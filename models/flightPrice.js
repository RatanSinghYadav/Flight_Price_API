const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    indigo:{
      type:String,
      required:true
    },
    airAsia:{
        type:String,
        required:true
    },
    vistara:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})

const flightPrice = new mongoose.model("Flight Price",priceSchema);

module.exports = flightPrice