const { Router } = require('express');
const { Owner } = require('../models/Owner');

module.exports = Router().get('/', async (req, res) => {
  const owners = await Owner.getAll();
  res.json(owners);
});
