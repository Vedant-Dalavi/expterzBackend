const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
    bikeName: {
        type: String,
        required: true,
        trim: true,
    },
    models: [
        {
            model: {
                type: String,
                required: true,
            }
        }
    ]
})

module.exports = mongoose.model("Bikes", bikeSchema)