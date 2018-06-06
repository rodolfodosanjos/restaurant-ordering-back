const mongoose = require('mongoose');
const Product = require('./Product.js');
const Order = mongoose.model('orders', {
	table: { type: String, lowercase: true, trim: true },
	notes: { type: String, lowercase: true, trim: true },
	products: []
});

const getAll = async () => (
	Order.find()
);

const getById = async (_id) => (
	Order.findOne({_id})
);

const create = async order => (
	new Order(order).save()
);

const remove = async _id => (
	Order.remove({
		_id: _id
	})
);

const update = async (_id, order) => (
	Order.findByIdAndUpdate(
		_id,
		order,
		{new: true}
	)
);

const orderProduct = async (orderId, productId) => (
	Product.getById(productId).then(product => (
		getById(orderId).then(order => {
			order.products.unshift(product);
			return order.save();
		})
	))
);

return module.exports = {
	getAll,
	create,
	remove,
	orderProduct,
	update
};