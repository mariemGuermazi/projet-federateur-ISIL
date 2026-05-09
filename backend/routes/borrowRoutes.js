const express = require("express");
const router = express.Router();

const borrowController = require("../controllers/borrowController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, borrowController.createBorrowRequest);
router.get("/user/:id", borrowController.getBorrowRequestsByUser);
router.get("/owner/:id", borrowController.getBorrowRequestsByOwner);
router.put("/:id", borrowController.updateBorrowRequestStatus);

module.exports = router;
