const { Router } = require('express');
const moviesRouter = Router();

moviesRouter.post('/', upload.single('video'), async (req, res) => {
    const { name, description, genero_ID, imagen, trailer } = req.body;
    const video = req.file ? req.file.buffer : null; // Obtener el archivo subido (si existe)

    try {
        const [result] = await promisePool.query(
            'INSERT INTO Movies (name, description, genero_ID, imagen, trailer, video) VALUES (?, ?, ?, ?, ?, ?)',
            [name, description, genero_ID, imagen, trailer, video]
        );
        res.status(201).json({ id: result.insertId, name, description, genero_ID, imagen, trailer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

moviesRouter.get('/', async (req, res) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM Movies');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

moviesRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await promisePool.query('SELECT * FROM Movies WHERE movie_ID = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: 'Película no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

moviesRouter.put('/:id', upload.single('video'), async (req, res) => {
    const { id } = req.params;
    const { name, description, genero_ID, imagen, trailer } = req.body;
    const video = req.file ? req.file.buffer : null; // Obtener el archivo subido (si existe)

    try {
        const [result] = await promisePool.query(
            'UPDATE Movies SET name = ?, description = ?, genero_ID = ?, imagen = ?, trailer = ?, video = ? WHERE movie_ID = ?',
            [name, description, genero_ID, imagen, trailer, video, id]
        );
        if (result.affectedRows > 0) {
            res.json({ id, name, description, genero_ID, imagen, trailer });
        } else {
            res.status(404).json({ message: 'Película no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

moviesRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await promisePool.query('DELETE FROM Movies WHERE movie_ID = ?', [id]);
        if (result.affectedRows > 0) {
            res.json({ message: 'Película eliminada' });
        } else {
            res.status(404).json({ message: 'Película no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = moviesRouter;