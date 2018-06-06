const express = require('express');
const router = express.Router();
const Product = require('../models/Product.js');

router.get('/', (req, res, next) => {
	Product.getAll().then((products) => {
		res.send(products);
	}, error => {
		res.status(500).send(error)
	})
});

module.exports = router;
