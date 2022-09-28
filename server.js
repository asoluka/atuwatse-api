const express = require("express");
const presskitController = require("./src/controllers/presskit-controller");
const speechesController = require("./src/controllers/speeches-controller");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/atuwatseIII?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
  )
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

app.use(express.json());
const auth = (req, res, next) => {
  if (req.body) {
    if (req.body.password) {
      next();
    } else {
      res.json({ error: "Unauthorized access" });
    }
  } else {
    next();
  }
};

app.use("/api/speeches", speechesController);
app.use("/api/presskit", presskitController);

app.listen(3001, () => {
  console.log("App running.");
});
