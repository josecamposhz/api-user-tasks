const { Router } = require('express');
const taskController = require('../controllers/taskController');
const { validateCreateTask } = require('../validators/taskValidators');

const router = Router();

router.get('/', taskController.getAllTasks);
router.get('/owner', taskController.getUserTasks);
router.get("/:id", taskController.getTaskById);
router.post("/", validateCreateTask, taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
