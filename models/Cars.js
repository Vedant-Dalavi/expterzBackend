const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    carName: {
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

module.exports = mongoose.model("Cars", carSchema)