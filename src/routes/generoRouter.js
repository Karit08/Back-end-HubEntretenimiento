const { Router } = require('express');
const generoRouter = Router();

generoRouter.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const [result] = await promisePool.query(
            'INSERT INTO Genero (name) VALUES (?)',
            [name]
        );
        res.status(201).json({ id: result.insertId, name });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

generoRouter.get('/', async (req, res) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM Genero');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

generoRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await promisePool.query('SELECT * FROM Genero WHERE genero_ID = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: 'Género no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

generoRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const [result] = await promisePool.query(
            'UPDATE Genero SET name = ? WHERE genero_ID = ?',
            [name, id]
        );
        if (result.affectedRows > 0) {
            res.json({ id, name });
        } else {
            res.status(404).json({ message: 'Género no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

generoRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await promisePool.query('DELETE FROM Genero WHERE genero_ID = ?', [id]);
        if (result.affectedRows > 0) {
            res.json({ message: 'Género eliminado' });
        } else {
            res.status(404).json({ message: 'Género no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = generoRouter;