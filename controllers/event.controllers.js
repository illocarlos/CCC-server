const Event = require('../models/Event.model')

const listEvent = (req, res, next) => {

    Event
        .find()
        .sort({ date: 1 }) //Fuera de MVP -> Añadir buscador por ciudad?
        .then(response => res.json(response))
        .catch(err => next(err))
}

const eventId = (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .populate("attendees")
        .then(response => res.json(response))
        .catch(err => next(err))

}

const newEvent = (req, res, next) => {

    const { title, description, cover, date, attendees, address: { street, number, zipcode, city, country }, location } = req.body
    const { _id: owner } = req.payload

    Event
        .create({
            title,
            description,
            cover,
            date,
            attendees,
            owner,
            address: {
                street,
                number,
                zipcode,
                city,
                country
            },
            location
        })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const editEvent = (req, res, next) => {

    const { event_id } = req.params
    const { eventData } = req.body

    Event
        .findByIdAndUpdate(event_id, eventData)
        .then(() => res.sendStatus(201))
        .catch((err) => next(err))
}


const deleteEvent = (req, res, next) => {
    const { event_id } = req.params

    Event
        .findByIdAndDelete(event_id)
        .then(() => res.sendStatus(204))
        .catch((err) => next(err))
}


module.exports = {
    listEvent,
    eventId,
    newEvent,
    deleteEvent,
    editEvent
}