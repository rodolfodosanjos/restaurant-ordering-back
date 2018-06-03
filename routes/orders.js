const express = require('express');
const router = express.Router();
const Order = require('../model/Order.js');

router.get('/', (req, res, next) => {
	Order.getAll().then((orders) => {
		res.send(orders);
	}, error => {
		res.status(500).send(error)
	})
});

router.post('/', (req, res, next) => {
	Order.create({
		name: req.body.name,
	}).then((order) => {
		res.send(order);
	}, error => {
		res.status(500).send(error)
	});
});

router.delete('/:_id', (req, res, next) => {
	Order.remove( req.params._id).then(_id => {
		res.send(req.params._id);
	}, error => {
		res.status(500).send(error)
	});
});

router.put('/:_id', (req, res, next) => {
	Order.update(
			req.params._id,
			req.body,
			{new: true},
	).then(order => {
		res.send(order
	)}, error => {
		res.status(500).send(error)
	})
});

module.exports = router;
