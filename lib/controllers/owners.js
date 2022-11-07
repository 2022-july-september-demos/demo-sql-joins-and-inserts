const { Router } = require('express');
const { Owner } = require('../models/Owner');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const owner = await Owner.getById(req.params.id);
    res.json(owner);
  })
  .get('/', async (req, res) => {
    const owners = await Owner.getAll();
    res.json(owners);
  });
