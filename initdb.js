const db = require('node-localdb');

module.exports = function() {
  const products = db('products.json');

  products.remove({});
  products.insert({ id: 1, name: 'Basic Slingshot', price: 1.99 });
  products.insert({ id: 2, name: 'Advanced Slingshot', price: 10.99 });
};
