const Park = require('../models/Park.model')

const listPark = (req, res, next) => {

    Park
        .find()
        .sort({ name: 1 }) //Fuera de MVP -> Añadir buscador por ciudad?
        .then(response => res.json(response))
        .catch(err => next(err))
}

const parkId = (req, res, next) => {

    const { park_id } = req.params

    Park
        .findById(park_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}

const newPark = (req, res, next) => {

    const { name, description, gallery, size, crowdedness, open, location } = req.body

    Park
        .create({ name, description, gallery, size, crowdedness, open, location })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const editPark = (req, res, next) => {

    const {park_id} = req.params
    const {parkData} = req.body

    Park
    .findByIdAndUpdate(park_id, parkData)
    .then(() => res.sendStatus(201))
    .catch((err) => next(err))
}

const deletePark = (req, res, next) => {

    const { park_id } = req.params

    Park
        .findByIdAndDelete(park_id)
        .then(() => res.sendStatus(204))
        .catch((err) => next(err))
}

module.exports = {
    newPark,
    parkId,
    listPark,
    deletePark,
    editPark
}