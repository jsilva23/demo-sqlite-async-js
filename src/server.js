const express = require('express');
const path =require('path');
const Database = require('sqlite-async');

const app = express();
const port = 5000;

// Create Tables
Database.open(path.join(__dirname, '..', 'db', 'development.sqlite')).then(db => {
  // Comando para criar tabelas.
});

// Inserir
Database.open(path.join(__dirname, '..', 'db', 'development.sqlite')).then(db => {
  // Comando para criar tabelas.
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Client Server Running at Port ${port}`)
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/api/todos', (req, res) => {
  Database.open(path.join(__dirname, '..', 'db', 'development.sqlite')).then(db => {
    // Comando para criar tabelas.

    res.json(todos);
  });
})
