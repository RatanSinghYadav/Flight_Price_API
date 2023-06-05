const {Router} = require('express');
const AddPrice = require('./addPrice');
const GetPrice = require('./getPrice');
const route = Router();


route.post('/addPrice',AddPrice);
route.get('/flightPrice',GetPrice);

module.exports = route;