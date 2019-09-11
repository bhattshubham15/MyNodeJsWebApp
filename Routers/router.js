const express = require('express')
const controller = require('../Controllers/firstController');

const router = express.Router();
router.post('/causes', controller.createCause);
router.get('/causes', controller.getCause);
router.delete('/deleteCause', controller.deleteCause);
router.put('/updateCause', controller.updateCause);
module.exports = router;
