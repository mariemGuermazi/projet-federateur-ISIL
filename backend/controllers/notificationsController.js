const db = require("../config/db");

exports.getNotificationsByUser = (req, res) => {
  const userId = req.params.userId;

  const sql = `
    SELECT
      item_title,
      status,
      created_at
    FROM notifications
    WHERE user_id = ?
      AND status IN ('accepted', 'rejected')
    ORDER BY created_at DESC
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to fetch notifications",
        error: err.message
      });
    }

    res.json(result);
  });
};
