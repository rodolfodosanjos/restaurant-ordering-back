const mongoose = require('mongoose');
const Product = mongoose.model('products', {
	name: { type: String, lowercase: true, trim: true },
	category: { type: String, lowercase: true, trim: true },
	description: { type: String, lowercase: true, trim: true },
	imageSrc: { type: String, lowercase: true, trim: true },
	price: { type: Number },
});

const getAll = async () => (
	Product.find()
);

const getById = async _id => (
	Product.findOne({_id})
);

return module.exports = {
	getAll,
	getById
};