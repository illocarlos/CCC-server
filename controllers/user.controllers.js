const User = require('../models/User.model')
const Event = require('../models/Event.model')

const listUsers = (req, res, next) => {

    User
        .find()
        // : PROYECTAR CON SELECT LOS FIND QUE PROCEDAN
        .sort({ name: 1 }) //Fuera de MVP -> Añadir buscador por nombre?
        .then(response => res.json(response))
        .catch(err => next(err))
}

const userId = (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .populate('dogs')
        .then(response => res.json(response))
        .catch(err => next(err))
}


const editUser = (req, res, next) => {

    const { user_id } = req.params
    const { userData } = req.body

    User
        .findByIdAndUpdate(user_id, userData)
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const addUserToEvent = (req, res, next) => {
    const { idEvent, idUser } = req.body


    Event
        .findByIdAndUpdate(idEvent, { $addToSet: { attendees: idUser } }, { new: true })
        .then(() => res.status(201).send("ok"))
        .catch(err => next(err))
}


const removeUserToEvent = (req, res, next) => {
    const { idEvent, idUser } = req.body
    const { _id } = idUser

    Event
        .findByIdAndUpdate(idEvent, { $pull: { attendees: _id } }, { new: true })
        .then(() => res.status(201).send("ok"))
        .catch(err => next(err))
}


const deleteUser = (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(() => res.sendStatus(204))
        .catch((err) => next(err))
}

module.exports = {
    userId,
    listUsers,
    deleteUser,
    editUser,
    addUserToEvent,
    removeUserToEvent
}