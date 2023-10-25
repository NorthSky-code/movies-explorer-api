const { celebrate, Joi } = require('celebrate');

const LINK_REGEX = /https?:\/\/(www\.)?[a-z0-9.-@_:%=]{1,128}\.[a-z]{1,64}[a-z0-9-_~:\/?#[\]@!\$&'()*+,;=]*/i;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validateUserInfo = celebrate({
	body: Joi.object().keys({
		name: Joi.string().min(2).max(30).required(),
		email: Joi.string().required().pattern(EMAIL_REGEX),
		password: Joi.string().required(),
	}),
});

const validateUserAuth = celebrate({
	body: Joi.object().keys({
		email: Joi.string().required().pattern(EMAIL_REGEX),
		password: Joi.string().required(),
	}),
});

const validateUpdateUser = celebrate({
	body: Joi.object().keys({
		name: Joi.string().min(2).max(30).required(),
		email: Joi.string().required().pattern(EMAIL_REGEX),
	}),
});

const validateMovieInfo = celebrate({
	body: Joi.object().keys({
		country: Joi.string().required(),
		director: Joi.string().required(),
		duration: Joi.number().required(),
		year: Joi.number().required(),
		description: Joi.string().required(),
		image: Joi.string().required().pattern(LINK_REGEX),
		trailerLink: Joi.string().required().pattern(LINK_REGEX),
		thumbnail: Joi.string().required().pattern(LINK_REGEX),
		movieId: Joi.number().required(),
		nameRU: Joi.string().required(),
		nameEN: Joi.string().required(),
	}),
});

const validateMovieId = celebrate({
	params: Joi.object().keys({
		_id: Joi.string().hex().length(24).required(),
	}),
});

module.exports = {
	validateUserInfo,
	validateUserAuth,
	validateUpdateUser,
	validateMovieInfo,
	validateMovieId
};