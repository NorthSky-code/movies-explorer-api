const router = require('express').Router();
const { validateUserAuth, validateUpdateUser } = require('../middlewares/validators');

const {
  getAuthUser,
  updateUser
} = require('../controllers/users');

router.get('/me', validateUserAuth, getAuthUser);
router.post('/me', validateUpdateUser, updateUser);

module.exports = router;