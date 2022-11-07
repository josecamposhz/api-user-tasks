const { Router } = require('express');
const router = Router();

const authRoutes = require('./auth.routes');
const taskRoutes = require('./task.routes');
const userRoutes = require('./user.routes');

// middlwares
const auth = require('../middlewares/auth');

router.use('/auth', authRoutes);
router.use('/tasks', auth, taskRoutes);
router.use('/users', auth, userRoutes);

router.use('/api-docs', require('./swagger'));

module.exports = router;
