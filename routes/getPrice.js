const flightPrice = require("../models/flightPrice");

const GetPrice = async(req,res)=>{
    try {
        const getData = await flightPrice.find();
        res.status(201).json(getData);
        console.log(getData);
    } catch (error) {
        res.status(422).json(error);
    }

}

module.exports = GetPrice ;