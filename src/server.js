const express = require('express');
const path =require('path');
const { saveTask } = require('./helpers');
const helper = require('./helpers');

const app = express();
const port = 5000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.get('/', helper.index);
app.get('/api/todos', helper.selectTasks);
app.get('/api/delete-task', helper.deleteTask);
app.post('/save-task', helper.saveTask);

app.listen(port, () => {
  console.log(`Client Server Running at Port ${port}`)
});
