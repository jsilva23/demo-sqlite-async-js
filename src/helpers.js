const Database = require('./db');

module.exports = {
    index(req, res) {
        res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    },

    selectTasks(req, res) {
        Database.then(async db => {
            const todos = await db.all('SELECT * FROM todos');
            res.json(todos);
        });
    },

    saveTask(req, res) {
        const task = req.body;
    
        Database.then(async db => {
            await db.run(`
                INSERT INTO todos (
                    task
                ) VALUES (
                    '${task.item}'
                );
            `);
            
        })
        return res.redirect('/')
    },

    deleteTask(req, res) {
        const id = req.query.id;
        
        Database.then(async db => {
            await db.run(`DELETE FROM todos WHERE id="${id}"`);
        });
    }



}

