const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");
require("dotenv").config();
const itemsRoutes = require('./routes/itemsRoutes');
const borrowRoutes = require("./routes/borrowRoutes");
const initBorrowRequestsTable = require("./config/initBorrowRequestsTable");

const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/items', itemsRoutes);
app.use("/borrow-requests", borrowRoutes);

initBorrowRequestsTable();

// Routes Auth
app.use("/api/auth", authRoutes);

// Route protégée
app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({ message: "Accès autorisé", user: req.user });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
