const sqlite3 = require('sqlite3').verbose();

// Connect to a SQLite database file or create it if it doesn't exist
const db = new sqlite3.Database('sqlite.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
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
