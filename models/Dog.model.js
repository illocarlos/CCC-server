const { Schema, model } = require("mongoose");

const dogSchema = new Schema(
    {

        name: {
            type: String,
            required: [true, 'Name is required.'],
        },

        description: {
            type: String,
            minlength: [5, 'Description must be at least 20 characters long'],

        },

        images: {
            type: [String],
            validate: {
                validator: value => value.length > 0,
                message: 'At least one photo is required'
            }
        },

        age: {
            type: Number,
            require: [true, 'Age is required']
        },

        size: {
            type: String,
            enum: ['BIG', 'MEDIUM', 'SMALL'],
            required: [true, 'Size is required.'],
        },

        gender: {
            type: String,
            enum: ['MALE', 'FEMALE'],
            required: [true, 'Gender is required.'],
        },

        castrated: {
            type: Boolean,
            require: [true, 'Castrated is required ']
        },
    })


const Dog = model("Dog", dogSchema);
module.exports = Dog;
