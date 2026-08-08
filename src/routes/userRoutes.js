const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authController = require('../middlewares/authMiddleware');
const permissionMiddleware = require('../middlewares/permissionMiddleware');

const { validateCreateUser } = require('../validators/userValidator');

router.post('/', validateCreateUser, userController.createUser);

router.use(authController);
router.use(permissionMiddleware);

router.get('/', userController.getAllUsers);

module.exports = router;
