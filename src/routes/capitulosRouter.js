const { Router } = require('express');
const capitulosRouter = Router();

capitulosRouter.post('/', async (req, res) => {
    const { serie_ID, temporada, nombre } = req.body;
    try {
        const [result] = await promisePool.query(
            'INSERT INTO Capitulos (serie_ID, temporada, nombre) VALUES (?, ?, ?)',
            [serie_ID, temporada, nombre]
        );
        res.status(201).json({ id: result.insertId, serie_ID, temporada, nombre });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

capitulosRouter.get('/', async (req, res) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM Capitulos');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

capitulosRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await promisePool.query('SELECT * FROM Capitulos WHERE capitulo_ID = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: 'Capítulo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

capitulosRouter.get('/serie/:serie_ID', async (req, res) => {
    const { serie_ID } = req.params;
    try {
        const [rows] = await promisePool.query('SELECT * FROM Capitulos WHERE serie_ID = ?', [serie_ID]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

capitulosRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { serie_ID, temporada, nombre } = req.body;
    try {
        const [result] = await promisePool.query(
            'UPDATE Capitulos SET serie_ID = ?, temporada = ?, nombre = ? WHERE capitulo_ID = ?',
            [serie_ID, temporada, nombre, id]
        );
        if (result.affectedRows > 0) {
            res.json({ id, serie_ID, temporada, nombre });
        } else {
            res.status(404).json({ message: 'Capítulo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

capitulosRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await promisePool.query('DELETE FROM Capitulos WHERE capitulo_ID = ?', [id]);
        if (result.affectedRows > 0) {
            res.json({ message: 'Capítulo eliminado' });
        } else {
            res.status(404).json({ message: 'Capítulo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = capitulosRouter;