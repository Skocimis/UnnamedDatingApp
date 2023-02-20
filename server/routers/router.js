var express = require('express');
const { Router } = require('express');
const controller = require('../controllers/controller');

const router = Router()

router.post('/join-waitlist',controller.addToWaitlist)

module.exports = router
