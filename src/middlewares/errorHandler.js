const {
	ValidationError,
	AuthenticationError,
	DefaultError,
	NotFoundError,
} = require("../utils/apiError");

function authenticationErrorHandler(err, _req, res, next) {
	if (err instanceof AuthenticationError) {
		console.log(err);
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

function notFoundErrorHandler(err, _req, res, next) {
	if (err instanceof NotFoundError) {
		return res.status(404).json(err);
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
		notFoundErrorHandler,
		defaultErrorHandler,
		genericErrorHandler,
	]);
};
