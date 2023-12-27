const express = require("express");
const cookie = require("cookie-parser");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRoute } = require("./routes/user.route");
const { productRoute } = require("./routes/product.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(cors());

app.use("/user", userRoute);
app.use("/product", productRoute);

const port = process.env.PORT || 8090;

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
    connection();
});