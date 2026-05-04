const db = require('../config/db');
const jwt = require('jsonwebtoken');

function getOwnerIdFromRequest(req) {
  const authHeader = req.header('Authorization');
  if (authHeader) {
    const token = authHeader.startsWith('Bearer ')
      ? authHeader.slice(7).trim()
      : authHeader.trim();

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'SECRET_KEY');
      if (decoded?.id) {
        return Number(decoded.id);
      }
    } catch (error) {
      // Fallback to body owner_id for compatibility with existing clients
    }
  }

  const bodyOwnerId = req.body?.owner_id;
  if (bodyOwnerId !== undefined && bodyOwnerId !== null && bodyOwnerId !== '') {
    const parsed = Number(bodyOwnerId);
    if (!Number.isNaN(parsed)) {
      return parsed;
    }
  }

  return null;
}

// Ajouter un objet
exports.addItem = (req, res) => {

  const { title, description, category_id, lending_duration, deposit, condition_rules } = req.body;
  const ownerId = getOwnerIdFromRequest(req);

  if (!title || !String(title).trim()) {
    return res.status(400).json({ message: "Title is required" });
  }

  if (!ownerId) {
    return res.status(400).json({ message: "owner_id is required. Please login and publish again." });
  }

  const sql = `
  INSERT INTO items
  (title, description, category_id, lending_duration, deposit, condition_rules, owner_id)
  VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql,
    [
      title,
      description || null,
      category_id || null,
      lending_duration || null,
      deposit || null,
      condition_rules || null,
      ownerId
    ],
    (err, result) => {

      if(err){
        res.status(500).json({ message: "Failed to add item", error: err.message });
      }else{
        res.json({ message: "Item added successfully", id: result.insertId });
      }

    });
};


// Voir tous les objets
exports.getItems = (req, res) => {

  const sql = "SELECT * FROM items ORDER BY created_at DESC";

  db.query(sql, (err, result) => {

    if(err){
      res.status(500).json({ message: "Failed to fetch items", error: err.message });
    }else{
      res.json(result);
    }

  });

};


// Voir un objet
exports.getItem = (req, res) => {

  const id = req.params.id;

  const sql = "SELECT * FROM items WHERE id = ?";

  db.query(sql, [id], (err, result) => {

    if(err){
      res.status(500).json({ message: "Failed to fetch item", error: err.message });
    }else{
      res.json(result[0]);
    }

  });

};
