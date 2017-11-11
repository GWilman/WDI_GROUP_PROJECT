const express = require('express');
const router  = express.Router();
const authentications = require('../controllers/authentications');
const users = require('../controllers/users');
const lessons = require('../controllers/lessons');

router.route('/register')
  .post(authentications.register);

router.route('/login')
  .post(authentications.login);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/lessons')
  .get(lessons.index);

module.exports = router;
