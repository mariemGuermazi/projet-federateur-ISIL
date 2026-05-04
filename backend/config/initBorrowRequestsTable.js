const db = require("./db");

function query(sql) {
  return new Promise((resolve, reject) => {
    db.query(sql, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

async function initBorrowRequestsTable() {
  const createTableSql = `
    CREATE TABLE IF NOT EXISTS borrow_requests (
      id INT AUTO_INCREMENT PRIMARY KEY,
      item_id INT NOT NULL,
      borrower_id INT NOT NULL,
      owner_id INT NOT NULL,
      start_date DATE NOT NULL,
      end_date DATE NOT NULL,
      status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_borrower_id (borrower_id),
      INDEX idx_owner_id (owner_id),
      INDEX idx_item_id (item_id)
    )
  `;

  try {
    await query(createTableSql);

    const columns = await query("SHOW COLUMNS FROM borrow_requests");
    const existingColumns = new Set(columns.map((c) => c.Field));
    let migrated = false;

    if (!existingColumns.has("owner_id")) {
      await query("ALTER TABLE borrow_requests ADD COLUMN owner_id INT NULL AFTER borrower_id");
      migrated = true;
    }

    if (!existingColumns.has("start_date")) {
      await query("ALTER TABLE borrow_requests ADD COLUMN start_date DATE NULL AFTER owner_id");
      migrated = true;
    }

    if (!existingColumns.has("end_date")) {
      await query("ALTER TABLE borrow_requests ADD COLUMN end_date DATE NULL AFTER start_date");
      migrated = true;
    }

    if (!existingColumns.has("created_at")) {
      await query("ALTER TABLE borrow_requests ADD COLUMN created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP AFTER status");
      migrated = true;
    }

    const refreshedColumns = await query("SHOW COLUMNS FROM borrow_requests");
    const refreshedSet = new Set(refreshedColumns.map((c) => c.Field));
    if (refreshedSet.has("request_date") && refreshedSet.has("created_at")) {
      await query("UPDATE borrow_requests SET created_at = request_date WHERE created_at IS NULL");
    }

    if (migrated) {
      console.log("borrow_requests table migrated and ready");
    } else {
      console.log("borrow_requests table is ready");
    }
  } catch (err) {
    console.error("Failed to initialize/migrate borrow_requests table:", err.message);
  }
}

module.exports = initBorrowRequestsTable;
