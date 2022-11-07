const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.get('/', userController.getAllUsers);
router.get("/:id", userController.getUserById);
// router.post("/", userController.createUser);
// router.patch("/:id", userController.updateUser);
// router.delete("/:id", userController.deleteUser);

module.exports = router;
