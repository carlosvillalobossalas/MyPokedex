const { Router } = require('express');
const { getInitialData, getMoreData, getPokemon } = require('../controllers/pokemon');
const router = Router();



//Obtener 20 primeros pokemon
router.get(
    '/initial',
    [],
    getInitialData
)

router.get(
    '/more',
    [],
    getMoreData
)

router.get(
    '/pokemon',
    [],
    getPokemon
)



module.exports = router;