const { Router } = require('express');
const seriesRouter = Router();

seriesRouter.post('/', async (req, res) => {
    const { name, description, genero_ID, imagen, trailer } = req.body;
    try {
        const [result] = await promisePool.query(
            'INSERT INTO Series (name, description, genero_ID, imagen, trailer) VALUES (?, ?, ?, ?, ?)',
            [name, description, genero_ID, imagen, trailer]
        );
        res.status(201).json({ id: result.insertId, name, description, genero_ID, imagen, trailer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


seriesRouter.get('/', async (req, res) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM Series');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

seriesRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await promisePool.query('SELECT * FROM Series WHERE id = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: 'Serie no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


seriesRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, genero_ID, imagen, trailer } = req.body;
    try {
        const [result] = await promisePool.query(
            'UPDATE Series SET name = ?, description = ?, genero_ID = ?, imagen = ?, trailer = ? WHERE id = ?',
            [name, description, genero_ID, imagen, trailer, id]
        );
        if (result.affectedRows > 0) {
            res.json({ id, name, description, genero_ID, imagen, trailer });
        } else {
            res.status(404).json({ message: 'Serie no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


seriesRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await promisePool.query('DELETE FROM Series WHERE id = ?', [id]);
        if (result.affectedRows > 0) {
            res.json({ message: 'Serie eliminada' });
        } else {
            res.status(404).json({ message: 'Serie no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = seriesRouter;