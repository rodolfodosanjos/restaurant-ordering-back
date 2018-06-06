const mongoose = require('mongoose');
const Product = mongoose.model('products', {
	name: { type: String, lowercase: true, trim: true },
	category: { type: String, lowercase: true, trim: true },
	description: { type: String, lowercase: true, trim: true },
	imageSrc: { type: String, lowercase: true, trim: true },
	price: { type: Number },
});

Product.create([{
	imageSrc: 'https://portal.minervafoods.com/files/styles/blog_full_page/public/como_fazer_hamburguer_caseiro.jpg?itok=CyGvXnuY',
	name: 'Hamburguer com batata frita',
	category: 'hamburguer',
	description: 'Hamburguer com queijo, carne e batata frita',
	price: 40
}, {
	imageSrc: 'http://d2gtpjxvvd720b.cloudfront.net/system/newsletter_item/social_image/182/default_hungry-girl-healthy-spaghetti-squash-shrimp-scampi.jpg',
	name: 'Macarrão com camarão',
	category: 'massas',
	description: 'Espaguete com camarão',
	price: 45.4
}, {
	imageSrc: 'https://abrilexame.files.wordpress.com/2017/05/sushi.jpg',
	name: 'Sushi',
	category: 'sushi',
	description: 'Sushi e sashimi',
	price: 60
}, {
	imageSrc: 'http://www.hojetemfrango.com.br/wp-content/uploads/2016/05/coxinhas-de-frango-1-e1464362242322.jpg',
	name: 'Coxinha',
	category: 'salgados',
	description: 'Coxinha de frango',
	price: 3
}, {
	imageSrc: 'https://www.tvgazeta.com.br/wp-content/uploads/2018/02/pastel.02-1024x576.jpg',
	name: 'Pastel',
	category: 'salgados',
	description: 'Coxinha de carne',
	price: 4
}]);

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