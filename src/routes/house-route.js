const express = require('express');
const router = express.Router();
const controller = require('../controllers/house-controller');

router.get('/', controller.get);
router.get('/name/:name', controller.getByName);
router.get('/:id', controller.getById);


router.delete('/',  controller.delete);

module.exports = router;