const { Schema, model } = require("mongoose");

const parkSchema = new Schema(
    {

        name: {
            type: String,
            required: [true, 'You need a name']
        },

        description: {
            type: String,
            required: [true, 'You need a description'],
            minlength: [20, 'Description must have 20 digits.']
        },

        gallery: {
            type: [String],
            required: [true, 'You need a photo'],
            validate: {
                validator: value => value.length > 0,
                message: 'At least one photo is required',
            },
        },

        size: {
            type: String,
            enum: ['LARGE', 'MEDIUM', 'SMALL'],
            default: 'MEDIUM',
            required: [true, 'You need a size'],

        },

        crowdedness: {
            type: String,
            enum: ['HIGH', 'MODERATE', 'LOW'],
            default: 'MODERATE',
            required: [true, 'You need a crowdedness'],

        },

        open: {
            type: Boolean,
            default: true,

        },

        rating: {
            type: [Number]
        },

        address: {
            street: String,
            number: Number,
            zipcode: Number,
            city: String,
            country: String,
        },

        location: {

            type: {
                type: String,
                default: 'Point'
            },
            coordinates: {
                type: [Number],
            },
        },

    }
);

const Park = model("Park", parkSchema)
module.exports = Park