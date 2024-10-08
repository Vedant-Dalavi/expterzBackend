const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
    },
    cars: [
        {
            brand: {
                type: String
            },
            vehicleName: {
                type: String
            },
            model: {
                type: String
            },
            vehicleNo: {
                type: String
            }
        }
    ],
    bikes: [
        {

            brand: {
                type: String
            },
            vehicleName: {
                type: String
            },
            model: {
                type: String
            },
            vehicleNo: {
                type: String
            }

        }
    ],
    bookings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Booking"
        }
    ],
    accountType: {
        type: String,
        default: "User"
    },
    permanentAdd: {
        type: String
    },
    address: [
        {
            type: String,
        }
    ],
    token: {
        type: String,
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model("User", userSchema)