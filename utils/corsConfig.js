const allowedCors = [
  'http://api.northsky.movie.nomoreparties.co',
  'https://northsky.movie.nomoreparties.co',
  'http://localhost:3000'
];

const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

module.exports = {
  allowedCors,
  DEFAULT_ALLOWED_METHODS
};