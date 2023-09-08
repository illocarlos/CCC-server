const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const {
    listPark,
    parkId,
    newPark,
    deletePark,
    editPark,
} = require('../controllers/park.controllers')

router.get('/list', listPark)

router.get('/:park_id', parkId)

router.post('/newPark', newPark)

router.put('/edit/:park_id', verifyToken, editPark )

router.delete('/delete/:park_id', verifyToken, deletePark)


module.exports = router