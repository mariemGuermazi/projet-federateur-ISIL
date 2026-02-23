const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // connexion MySQL


router.post('/register', async (req, res) => {

  const { name, email, password } = req.body;

  // Vérifier champs
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Tous les champs sont obligatoires" });
  }

  // Vérifier si email existe
  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {

    if (err) return res.status(500).json({ message: "Erreur serveur" });

    if (result.length > 0) {
      return res.status(400).json({ message: "Email déjà utilisé" });
    }

    try {
      // Hasher mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insérer utilisateur
      db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword],
        (err) => {
          if (err)
            return res.status(500).json({ message: "Erreur insertion base de données" });

          res.status(201).json({
            message: "Utilisateur créé avec succès"
          });
        }
      );

    } catch (error) {
      res.status(500).json({ message: "Erreur lors du hash du mot de passe" });
    }

  });
});


// =============================
// ✅ LOGIN
// =============================
router.post('/login', async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email et mot de passe requis" });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {

    if (err) return res.status(500).json({ message: "Erreur serveur" });

    if (result.length === 0) {
      return res.status(400).json({ message: "Utilisateur introuvable" });
    }

    const user = result[0];

    try {
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Mot de passe incorrect" });
      }

      // Génération du token
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET || "SECRET_KEY",
        { expiresIn: "1h" }
      );

      res.json({
        message: "Connexion réussie",
        token
      });

    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la connexion" });
    }

  });
});

module.exports = router;
