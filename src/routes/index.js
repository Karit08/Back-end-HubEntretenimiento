const { Router } = require('express');
const usersRouter = require('./usersRouter');
const moviesRouter = require('./moviesRouter');
const seriesRouter = require('./seriesRouter');
const capitulosRouter = require('./capitulosRouter')
const favoriteRouter = require('./favoritosRouter');
const generoRouter = require('./generoRouter');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hub Entretenimiento');
  }
);
  

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('/series', seriesRouter);
router.use('/capitulos', capitulosRouter);
router.use('/favoritos', favoriteRouter);
router.use('/generos', generoRouter);

module.exports = usersRouter;