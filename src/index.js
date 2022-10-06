const express = require("express");

const mongoConnect = require("./db/dbConnection");
const userValidator = require("./middleware/userValidator");

const fetchUserRouter = require("./routes/mobile.routes");
const userRouter = require("./routes/user.routes");

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoConnect();

app.get("/health", (req, res) => {
  res.status(200).send("Server is up");
});

app.use("/fetch", fetchUserRouter);
app.use("/user", userValidator, userRouter);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
