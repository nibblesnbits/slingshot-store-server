const db = require('node-localdb');

module.exports = function() {
  const products = db('products.json');

  products.remove({});
  products.insert({ id: 1, name: 'Basic Slingshot', description: 'A basic slingshot for beginners.', price: 1.99 });
  products.insert({ id: 2, name: 'Advanced Slingshot', description: 'And advanced slinshot, for advanced users.', price: 10.99 });
  products.insert({ id: 3, name: 'Fancy Slingshot', description: 'A fancier model.  For those who want to sling in style.', price: 100.99 });
  products.insert({ id: 4, name: 'Decorated Slingshot', description: 'A slingshot with some rhinestones for added class.', price: 15.99 });
  products.insert({ id: 5, name: 'Childrens\' Slingshot', description: 'A slingshot for children.', price: 3.99 });
  products.insert({ id: 6, name: 'Adult Slingshot', description: 'A slingshot for grown-ups.', price: 20.99 });
  products.insert({ id: 7, name: 'Sling', description: 'The early predecesor to the slingshot.  Made with real leather.', price: 249.99 });
};
