// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
    CarsInfo,
    addCar
} = require("../controllers/Cars")


const { auth } = require("../middleware/auth")

// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      car routes
// ********************************************************************************************************

// get all cars
router.get("/get-car", CarsInfo);

// insert a car in user's cars

router.put("/addcar", addCar);


module.exports = router