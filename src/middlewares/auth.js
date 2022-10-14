const jwt = require("jsonwebtoken");
const { User } = require("../models/auth-model");

const auth = async (req, res, next) => {
	// check if a user has an athorization header
	const { authorization } = req.headers;

	if (authorization) {
		if (authorization.split(" ")[0] == "Bearer") {
			const token = authorization.split(" ")[1];
			const decoded = jwt.verify(token, process.env.AUTH_SECRET);
			// if line 2 is true, then check if the bearer token is valid
			if (decoded.id) {
				// search user by id
				try {
					const user = await User.findById({ _id: decoded.id });
					if (user) {
						return next();
					} else {
						return res.status(401).json({
							message: "Invalid token provided",
						});
					}
				} catch (e) {
					throw new Error(e);
				}
			} else {
				return res.status(500).json({
					message: "malformed token provided",
				});
			}
		}

		return res.status(500).json({
			message: "This route requires a bearer token",
		});
	}

	return res.status(500).json({
		message: "Please provide an authorization header to access this route",
	});
};

module.exports = auth;
