const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/itemsController');
const authMiddleware = require('../middleware/authMiddleware');

// publier un objet
router.post('/', authMiddleware, itemsController.addItem);

// afficher tous les objets
router.get('/', itemsController.getItems);

// afficher un objet
router.get('/:id', itemsController.getItem);

module.exports = router;
