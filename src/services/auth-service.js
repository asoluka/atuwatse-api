const { User } = require("../models/auth-model");
const { presskit } = require("../models/presskit-model");
const { DefaultError } = require("../utils/apiError");

const register = async (payload) => {
	const user = await findByEmail(payload.email);

	if (user) {
		throw new AuthenticationError();
	}

	try {
		const newUser = new User(payload);
		return newUser.save();
	} catch (e) {
		throw new DefaultError();
	}
};

const login = async (payload) => {
	const { email, password } = payload;
	const user = await findByEmail(email);

	if (user) {
		if (user.password === password) {
			return serializeUser(user);
		} else {
			return null;
		}
	} else {
		return null;
	}
};

async function findByEmail(email) {
	return User.findOne({ email });
}

function serializeUser(user) {
	return {
		id: user?._id,
		email: user?.email,
		firstName: user?.firstName,
		lastName: user?.lastName,
	};
}

module.exports = {
	register,
	login,
};
