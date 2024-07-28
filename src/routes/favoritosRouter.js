const { Router } = require('express');
const favoriteRouter = Router();

favoriteRouter.post('/', async (req, res) => {
    const { user_ID, movie_ID, serie_ID } = req.body;
    try {
        const [result] = await promisePool.query(
            'INSERT INTO Favoritos (user_ID, movie_ID, serie_ID) VALUES (?, ?, ?)',
            [user_ID, movie_ID || null, serie_ID || null] // Permitir valores nulos para película o serie
        );
        res.status(201).json({ id: result.insertId, user_ID, movie_ID, serie_ID });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

favoriteRouter.get('/', async (req, res) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM Favoritos');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

favoriteRouter.get('/user/:user_ID', async (req, res) => {
    const { user_ID } = req.params;
    try {
        const [rows] = await promisePool.query('SELECT * FROM Favoritos WHERE user_ID = ?', [user_ID]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

favoriteRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await promisePool.query('SELECT * FROM Favoritos WHERE favorito_ID = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: 'Favorito no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

favoriteRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { user_ID, movie_ID, serie_ID } = req.body;
    try {
        const [result] = await promisePool.query(
            'UPDATE Favoritos SET user_ID = ?, movie_ID = ?, serie_ID = ? WHERE favorito_ID = ?',
            [user_ID, movie_ID || null, serie_ID || null, id]
        );
        if (result.affectedRows > 0) {
            res.json({ id, user_ID, movie_ID, serie_ID });
        } else {
            res.status(404).json({ message: 'Favorito no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

favoriteRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await promisePool.query('DELETE FROM Favoritos WHERE favorito_ID = ?', [id]);
        if (result.affectedRows > 0) {
            res.json({ message: 'Favorito eliminado' });
        } else {
            res.status(404).json({ message: 'Favorito no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = favoriteRouter;