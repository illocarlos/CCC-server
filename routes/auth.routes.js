const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const {
    signUpUser,
    logInUser,
    verifyUser

} = require('./../controllers/auth.controllers')

router.post('/signup', signUpUser)
router.post('/login', logInUser)
router.get('/verify', verifyToken, verifyUser)

module.exports = router