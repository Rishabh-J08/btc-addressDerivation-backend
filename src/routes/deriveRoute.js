const express = require('express');
const { deriveAddressesController } = require('../controllers/deriveController');

const router = express.Router();

router.post('/derive-addresses', deriveAddressesController);

module.exports = router;
