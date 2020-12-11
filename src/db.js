const Database = require('sqlite-async');
const path =require('path');

// Create Tables
function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS todos(
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            task TEXT
        );
    `);
}

module.exports = Database.open(path.join(__dirname, '..', 'db', 'development.sqlite')).then(execute);

