const {
	ValidationError,
	AuthenticationError,
	DefaultError,
	PermissionError,
	NotFoundError,
	LargeFileError,
	UnsupportedMediaError,
} = require("../utils/apiError");

function authenticationErrorHandler(err, _req, res, next) {
	if (err instanceof AuthenticationError) {
		return res.status(401).json(err);
	}
	next(err);
}

function validationErrorHandler(err, _req, res, next) {
	if (err instanceof ValidationError) {
		return res.status(400).json(err);
	}
	next(err);
}

function permissionErrorHandler(err, _req, res, next) {
	if (err instanceof PermissionError) {
		return res.status(403).json(err);
	}
	next(err);
}

function notFoundErrorHandler(err, _req, res, next) {
	if (err instanceof NotFoundError) {
		return res.status(404).json(err);
	}
	next(err);
}

function largeFileErrorHandler(err, _req, res, next) {
	if (err instanceof LargeFileError) {
		return res.status(413).json(err);
	}
	next(err);
}

function unsupportedMediaErrorHandler(err, _req, res, next) {
	if (err instanceof UnsupportedMediaError) {
		return res.status(415).json(err);
	}
	next(err);
}

function defaultErrorHandler(err, _req, res, next) {
	if (err instanceof DefaultError) {
		console.log("execution got here");
		return res.status(500).json(err);
	}
	next(err);
}

function genericErrorHandler(err, _req, res, next) {
	res.status(500).json(err);
	next();
}

module.exports = function ErrorHandlingMiddleware(app) {
	app.use([
		authenticationErrorHandler,
		validationErrorHandler,
		permissionErrorHandler,
		largeFileErrorHandler,
		unsupportedMediaErrorHandler,
		notFoundErrorHandler,
		defaultErrorHandler,
		genericErrorHandler,
	]);
};
