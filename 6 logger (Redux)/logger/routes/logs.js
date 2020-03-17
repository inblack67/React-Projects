const express = require('express');
const router = express.Router();
const { getLogs, addLog, updateLog, deleteLog } = require('../controllers/logs');

router.get('/', getLogs);
router.post('/:id', addLog);
router.put('/:id/:tech_id', updateLog);
router.delete('/:id', deleteLog);


module.exports = router;