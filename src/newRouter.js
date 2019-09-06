'use strict';

const express = require('express');
const router = express.Router();

const auth = require('./middleware/auth.js');

router.get('/public-stuff', () => {}); // should be visible by anyone
router.get('/hidden-stuff', auth(), () => {}); // should require only a valid login
router.get('/something-to-read', auth('read'), () => {}); // should require the read capability
router.post('/create-a-thing', auth('create'), () => {}); // should require the create capability
router.put('/update', auth('update'), () => {}); // should require the update capability
router.patch('/jp', auth('update'), () => {}); // should require the update capability
router.delete('/bye-bye', auth('delete'), () => {}); // should require the delete capability
router.get('/everything', auth('superuser'), () => {}); // should require the superuser capability

module.exports = router;
