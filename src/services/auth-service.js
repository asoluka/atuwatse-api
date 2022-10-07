const { User } = require("../models/auth-model");
const { presskit } = require("../models/presskit-model");

const register = async (payload) => {
	const user = await findByEmail(payload.email);

	if (user) {
		return "user exists";
	}

	try {
		const newUser = new User(payload);
		return newUser.save();
	} catch (e) {
		throw new Error(e);
	}
};

const login = async (payload) => {
	const { email, password } = payload;
	const user = await findByEmail(email);

	if (user) {
		if (user.password === password) {
			const id = user._id;
			delete user.password;
			delete user._id;

			return user;
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

module.exports = {
	register,
	login,
};
