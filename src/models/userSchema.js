const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const userModal = model("users", userSchema)

module.exports = userModal