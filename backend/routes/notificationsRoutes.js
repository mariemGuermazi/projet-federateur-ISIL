const express = require("express");
const router = express.Router();
const notificationsController = require("../controllers/notificationsController");

router.get("/:userId", notificationsController.getNotificationsByUser);

module.exports = router;
