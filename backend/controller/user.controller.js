const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { userModel } = require("../models/user.schema");
const signUp = async (req, res) => {
    let { username, email, password, role } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
        return res.status(400).redirect("/user/login");
    }
    else {
        bcrypt.hash(password, 7, async (err, hash) => {
            if (err) {
                console.log(err.message);
            }
            else {
                let user = await userModel.create({
                    username, email, password: hash, role
                });
                let token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
                return res.status(200).cookie("token", token).cookie("name", user.username).json({ token: token });
            }
        });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.log(err.message);
            }
            if (result) {
                let token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
                return res.status(200).cookie("token", token).cookie("name", user.username).json({ token: token });
            }
            else {
                return res.status(400).send("invalid password");
            }
        })
    }
    else {
        return res.status(400).redirect("/user/signup");
    }
};

// const userLogout=(req,res)=>{
//     res.clearCookie("token").redirect("/user/login");
// }

module.exports = { signUp, login };