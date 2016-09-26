const express = require('express');
const db = require('node-localdb');
const app = module.exports = express.Router();

const products = db('products.json');

function findProductById(id) {
  return products.findOne({ id: +id }).then(p => {
    if (!p) {
      throw new Error(`Product with id of ${id} not found`);
    }
    return p;
  });
}

app.get('/api/products', (req, res) => {
  products.find({}).then(products => {
    return res.status(200).json(products);
  });
});

app.get('/api/products/count', (req, res) => {
  products.count({}).then(count => {
    return res.status(200).json({ count: count });
  }).catch(err => {
    return res.status(500).json(err);
  });
});

app.get('/api/products/:id', (req, res) => {
  findProductById(req.params.id).then(p => {
    return res.status(200).json(p);
  }).catch(err => {
    return res.status(404).json({ message: err.message });
  });
});

app.post('/api/products', (req, res) => {
  products.find({}).then(list => {
    const maxId = Math.max.apply(Math, list.map(p => p.id));
    req.body.id = maxId + 1;
    products.insert(req.body).then(product => {
      return res.status(201).json(product);
    }).catch(err => {
      return res.status(500).json(err);
    });
  });
});

app.put('/api/products', (req, res) => {
  findProductById(req.body.id).then(p => {
    products.remove({ id: p.id }).then(() => {
      return products.insert(req.body).then(newProduct=> {
        return res.status(200).json(newProduct);
      });
    }).catch(err => {
      return res.status(500).json(err);
    });
  }).catch(err => {
    return res.status(404).json({ message: err.message });
  });
});

app.delete('/api/products/:id', (req, res) => {
  products.remove({ id: +req.params.id }).then(p => {
    if (!p.length) {
      return res.status(404).json({ message: `Product with id of ${req.params.id} not found`});
    }
    return res.status(200).json(p[0]);
  }).catch(err => {
    return res.status(500).json(err);
  });
});
