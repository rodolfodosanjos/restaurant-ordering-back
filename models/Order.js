const mongoose = require('mongoose');
const Order = mongoose.model('orders', {
	table: { type: String, lowercase: true, trim: true },
	notes: { type: String, lowercase: true, trim: true },
	products: []
});

const getAll = async () => (
	Order.find()
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

return module.exports = {
	getAll,
	create,
	remove,
	update
};