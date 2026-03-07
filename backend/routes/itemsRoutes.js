const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/itemsController');

// publier un objet
router.post('/', itemsController.addItem);

// afficher tous les objets
router.get('/', itemsController.getItems);

// afficher un objet
router.get('/:id', itemsController.getItem);

module.exports = router;