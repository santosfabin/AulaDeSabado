const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, loginController.getLogin);
router.post('/', loginController.autenticade);
router.delete('/', loginController.logout);

module.exports = router;