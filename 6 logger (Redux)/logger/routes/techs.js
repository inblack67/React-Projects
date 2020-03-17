const express = require('express');
const router = express.Router();
const { getTechs, addTech, deleteTech } = require('../controllers/techs');

router.get('/', getTechs);
router.post('/', addTech);
router.delete('/:id', deleteTech);


module.exports = router;