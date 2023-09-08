const Dog = require('../models/Dog.model')
const User = require('../models/User.model')


const ListDog = (req, res, next) => {

    Dog
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const dogId = (req, res, next) => {

    const { dog_id } = req.params

    Dog
        .findById(dog_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}

const newDog = (req, res, next) => {

    const { name, description, images, age, size, gender, castrated } = req.body

    Dog
        .create({ name, description, images, age, size, gender, castrated })
        .then(dog => res.json(dog))
        .catch(err => next(err))
}

const addDogToUser = (req, res, next) => {

    const { idUser, idDog: dogs } = req.body

    User
        .findByIdAndUpdate(idUser, { $addToSet: { dogs } }, { new: true })
        .then(() => res.status(201).send("ok"))
        .catch(err => next(err))

}
const deletedDog = (req, res, next) => {


    const { idUser, idDog: dogs } = req.body

    User
        .findByIdAndUpdate(idUser, { $pull: { dogs } }, { new: true })
        .then((response) => {

            res.status(201).send("ok")
        })
        .catch(err => {
            next(err)
        })
}

module.exports = {
    newDog,
    addDogToUser,
    dogId,
    ListDog,
    deletedDog

}