const db = require('../config/db');

// Ajouter un objet
exports.addItem = (req, res) => {

  const { title, description, category_id, lending_duration, deposit, condition_rules, owner_id } = req.body;

  if (!title || !String(title).trim()) {
    return res.status(400).json({ message: "Title is required" });
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
      owner_id || null
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
