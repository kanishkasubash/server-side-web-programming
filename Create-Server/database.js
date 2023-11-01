const sqlite3 = require('sqlite3').verbose();

// Connect to a SQLite database file or create it if it doesn't exist
const db = new sqlite3.Database('sqlite.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(
            `CREATE TABLE products 
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                productName text, 
                description text,
                unitPrice INTEGER
            )`,
            (err) => {
                if (err) {
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    var insert = "INSERT INTO products (productName, description, unitPrice) VALUES (?,?,?)";
                    db.run(
                        insert,
                        [
                            "White Basmathi Rice",
                            "White Basmathi Rice imported from Pakistan. High-quality rice with extra fragrance. Organically grown.",
                            200,
                        ]
                    );
                }
            }
        );
    }
});

// Close the database connection when you're done
/* db.close((err) => {
    if (err) {
        console.error('Error closing the database:', err.message);
    } else {
        console.log('Database connection closed.');
    }
}); */

module.exports = db;
