const express = require('express');
const multer = require('multer');


const appealController = require('../controllers/appeal.controller');
const router = express.Router();

// can choose some s3 storage
const upload = multer({dest : "uploads/"});

router.post('/create', upload.array('files'), appealController.doAppeal);

router.post('/review', upload.array('files'), appealController.reviewAppeal);


module.exports = router;
