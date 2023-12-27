const { Router } = require("express");
const { signUp, login } = require("../controller/user.controller");
const userRoute = Router();

// // Signup route
userRoute.post("/signup",signUp);

// // Login route
userRoute.post("/login",login);

// logout route
// userRoute.get("/logout",userLogout);

module.exports = { userRoute };