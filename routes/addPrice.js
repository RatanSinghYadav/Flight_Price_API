const Price = require("../models/flightPrice");

const AddPrice = async (req, res) => {
    const { indigo, airAsia, vistara, date } = req.body;

    if (!indigo || !airAsia || !vistara || !date) {
        res.status(422).json("please fill the require Field.")
    }
    try {

        const priceData = new Price({ indigo, airAsia, vistara, date })
        await priceData.save()
        console.log(priceData)
        res.status(201).json(priceData)
    } catch (error) {
        console.log("Error Message:",error)
    }
}

module.exports = AddPrice;