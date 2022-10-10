const router = require("express").Router();
const { register, login } = require("../services/auth-service");
const { AsyncWrapper } = require("../utils/asyncWrapper.");

router.post(
	"/sign-up",
	AsyncWrapper(async (req, res) => {
		const response = await register(req.body);

		if (response) {
			res.json({
				message: "User created successfully",
				payload: response,
			});
			return;
		}
		res.status(500).json({ message: "something went wrong" });
	})
);

router.post(
	"/login",
	AsyncWrapper(async (req, res) => {
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
	})
);

module.exports = router;
