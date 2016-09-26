const db = require('node-localdb');

module.exports = function() {
  const products = db('products.json');

  products.remove({});
  products.insert({ id: 1, name: 'Basic Slingshot', price: 1.99 });
  products.insert({ id: 2, name: 'Advanced Slingshot', price: 10.99 });
  products.insert({ id: 3, name: 'Fancy Slingshot', price: 100.99 });
  products.insert({ id: 4, name: 'Decorated Slingshot', price: 15.99 });
  products.insert({ id: 5, name: 'Childrens\' Slingshot', price: 3.99 });
  products.insert({ id: 6, name: 'Adult Slingshot', price: 20.99 });
};
