const express = require('express')
const router = express.Router();
const Order = require('./order.model');
const { createAOrder, getOrderByEmail } = require('./order.controller');

//create order endpoint
router.post("/", createAOrder);

router.get("/email/:email", getOrderByEmail);

module.exports = router;