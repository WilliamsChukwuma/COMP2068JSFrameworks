const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/dave', (req, res) => res.render('dave'));
router.get('/burnaboy', (req, res) => res.render('burnaboy'));
router.get('/kendrick', (req, res) => res.render('kendrick'));
router.get('/jeriq', (req, res) => res.render('jeriq'));

module.exports = router;
