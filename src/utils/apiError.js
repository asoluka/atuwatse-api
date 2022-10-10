class DefaultError {
	constructor(message = "Error processing request") {
		this.message = message;
	}
}

class AuthenticationError {
	constructor(message = "Unauthorized") {
		this.message = message;
	}
}

class ValidationError {
	constructor(message) {
		this.message = message;
	}
}

class NotFoundError {
	constructor(message) {
		this.message = message;
	}
}

module.exports = {
	AuthenticationError,
	ValidationError,
	DefaultError,
	NotFoundError,
};
