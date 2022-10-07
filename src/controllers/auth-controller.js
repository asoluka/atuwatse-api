const router = require("express").Router();
const { register, login } = require("../services/auth-service");

router.post("/sign-up", async (req, res) => {
	const response = await register(req.body);

	if (response === "user exists") {
		return res.status(500).json({ error: response });
	}

	if (response) {
		res.json({
			message: "User created successfully",
			payload: response,
		});
	}
});

router.post("/login", async (req, res) => {
	/**
	 * accept request and send to login service
	 */
	const response = await login(req.body);
	if (response) {
		res.json({
			message: "login successful",
			payload: response,
		});
	} else {
		res
			.status(401)
			.json({ error: 401, message: "Unauthorized access declined" });
	}
});

module.exports = router;
