const express = require("express");
const presskitController = require("./src/controllers/presskit-controller");
const speechesController = require("./src/controllers/speeches-controller");
const authController = require("./src/controllers/auth-controller");
const app = express();
const mongoose = require("mongoose");
const ErrorHandlingMiddleware = require("./src/middlewares/errorHandler");

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

app.use("/api/auth", authController);
app.use("/api/speeches", speechesController);
app.use("/api/presskit", presskitController);

ErrorHandlingMiddleware(app);

app.listen(3001, () => {
	console.log("App running.");
});
