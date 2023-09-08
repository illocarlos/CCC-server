
const router = require("express").Router()

const parkRoutes = require('./park.routes')
router.use("/park", parkRoutes)

const dogRoutes = require('./dog.routes')
router.use("/dog", dogRoutes)

const authRoutes = require('./auth.routes')
router.use("/auth", authRoutes)

const eventRoutes = require('./event.routes')
router.use("/event", eventRoutes)

const userRoutes = require('./user.routes')
router.use("/user", userRoutes)

const uploadRoutes = require('./upload.routes')
router.use("/upload", uploadRoutes)

module.exports = router