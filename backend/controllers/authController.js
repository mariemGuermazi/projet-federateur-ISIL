const db = require("../config/db");
const bcrypt = require("bcrypt");

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Vérifier si email existe déjà
  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (result.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hasher mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insérer utilisateur
    db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword],
      (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Server error" });
        }

        res.status(201).json({ message: "User registered successfully" });
      }
    );
  });
};
