const router = require('express').Router();
const { fetchUser, fetchTask, renderHome, postTask, deleteTask, editTask, newData, postUser ,fitlerAllTask} = require('../collections');
router.get('/users', fetchUser);
router.get('/tasks/:id', fetchTask);

router.get('/home', renderHome);
router.post('/task', postTask);
router.post('/fitlerAllTask',fitlerAllTask)
router.delete('/task', deleteTask)
router.put('/task', editTask)
router.post('/fitlerTask', newData)
router.post('/user', postUser)
module.exports = router;
