const db = require("../config/db");

const ALLOWED_STATUS = ["pending", "accepted", "rejected"];

exports.createBorrowRequest = (req, res) => {
  const { item_id, borrower_id, owner_id, start_date, end_date } = req.body;

  if (!item_id || !borrower_id || !start_date || !end_date) {
    return res.status(400).json({ message: "item_id, borrower_id, start_date and end_date are required" });
  }

  if (new Date(start_date) > new Date(end_date)) {
    return res.status(400).json({ message: "start_date must be before end_date" });
  }

  const ownerSql = "SELECT owner_id FROM items WHERE id = ? LIMIT 1";

  db.query(ownerSql, [item_id], (ownerErr, ownerRows) => {
    if (ownerErr) {
      return res.status(500).json({ message: "Failed to read item owner", error: ownerErr.message });
    }

    if (!ownerRows || ownerRows.length === 0) {
      return res.status(404).json({ message: "Item not found" });
    }

    const resolvedOwnerId = ownerRows[0].owner_id || owner_id;
    if (!resolvedOwnerId) {
      return res.status(400).json({ message: "Item has no owner. Republish it while logged in." });
    }

    if (Number(borrower_id) === Number(resolvedOwnerId)) {
      return res.status(400).json({ message: "You cannot request your own item." });
    }

    const sql = `
      INSERT INTO borrow_requests
      (item_id, borrower_id, owner_id, start_date, end_date, status)
      VALUES (?, ?, ?, ?, ?, 'pending')
    `;

    db.query(sql, [item_id, borrower_id, resolvedOwnerId, start_date, end_date], (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Failed to create borrow request", error: err.message });
      }

      res.status(201).json({
        message: "Borrow request created successfully",
        id: result.insertId
      });
    });
  });
};

exports.getBorrowRequestsByUser = (req, res) => {
  const userId = req.params.id;

  const sql = `
    SELECT br.*, i.title AS item_title
    FROM borrow_requests br
    LEFT JOIN items i ON i.id = br.item_id
    WHERE br.borrower_id = ?
    ORDER BY br.created_at DESC
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Failed to fetch user requests", error: err.message });
    }

    res.json(result);
  });
};

exports.getBorrowRequestsByOwner = (req, res) => {
  const ownerId = req.params.id;

  const sql = `
    SELECT br.*, i.title AS item_title, u.name AS borrower_name
    FROM borrow_requests br
    LEFT JOIN items i ON i.id = br.item_id
    LEFT JOIN users u ON u.id = br.borrower_id
    WHERE br.owner_id = ?
    ORDER BY br.created_at DESC
  `;

  db.query(sql, [ownerId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Failed to fetch owner requests", error: err.message });
    }

    res.json(result);
  });
};

exports.updateBorrowRequestStatus = (req, res) => {
  const requestId = req.params.id;
  const { status } = req.body;

  if (!ALLOWED_STATUS.includes(status) || status === "pending") {
    return res.status(400).json({ message: "Status must be accepted or rejected" });
  }

  const sql = "UPDATE borrow_requests SET status = ? WHERE id = ?";

  db.query(sql, [status, requestId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Failed to update request status", error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Borrow request not found" });
    }

    res.json({ message: "Borrow request updated successfully" });
  });
};
