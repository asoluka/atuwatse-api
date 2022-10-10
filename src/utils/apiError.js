class DefaultError {
	constructor(message = "Error processing request") {
		this.message = message;
	}
}

class LargeFileError {
	constructor(message = "File too large") {
		this.message = message;
	}
}

class UnsupportedMediaError {
	constructor(message = "Unsupported Media file") {
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

class PermissionError {
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
	PermissionError,
	NotFoundError,
	LargeFileError,
	UnsupportedMediaError,
};
