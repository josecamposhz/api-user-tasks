const { Router } = require('express');
const authController = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../validators/authValidators');

const router = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *     - Auth
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post('/login', validateLogin, authController.login);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *     - Auth
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post('/register', validateRegister, authController.register);

module.exports = router;
