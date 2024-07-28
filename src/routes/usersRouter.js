const { Router } = require('express');
const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
    const { name, email, phone, surname, password, address } = req.body;
    try {
        const [result] = await promisePool.query(
            'INSERT INTO Users (name, email, phone, surname, password, address) VALUES (?, ?, ?, ?, ?, ?)',
            [name, email, phone, surname, password, address]
        );
        res.status(201).json({ id: result.insertId, name, email, phone, surname, address });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
);
  
usersRouter.get('/', async (req, res) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM Users');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
);
  
  
usersRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await promisePool.query('SELECT * FROM Users WHERE user_ID = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
);
  

usersRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, surname, password, address } = req.body;
    try {
        const [result] = await promisePool.query(
            'UPDATE Users SET name = ?, email = ?, phone = ?, surname = ?, password = ?, address = ? WHERE user_ID = ?',
            [name, email, phone, surname, password, address, id]
        );
        if (result.affectedRows > 0) {
            res.json({ id, name, email, phone, surname, address });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
);
  
 
usersRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await promisePool.query('DELETE FROM Users WHERE user_ID = ?', [id]);
        if (result.affectedRows > 0) {
            res.json({ message: 'Usuario eliminado' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
);

module.exports = usersRouter;