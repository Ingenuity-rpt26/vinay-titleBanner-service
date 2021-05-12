const express = require('express');
const router = express.Router();

// mongo controllers
// const { postTitle, getTitle, putTitle, deleteTitle } = require('../controllers/mongo/title.Controller');
// const { postEnrolled, getEnrolled, putEnrolled, deleteEnrolled } = require('../controllers/mongo/enrolled.Controller');

// postgres controllers
const { getTitle, postTitle, putTitle, deleteTitle } = require('../controllers/postgres/title.Controller');
const { postEnrolled, getEnrolled, putEnrolled, deleteEnrolled } = require('../controllers/postgres/enrolled.Controller');

// cassandra controllers
// const { postTitle, getTitle, putTitle, deleteTitle } = require('../controllers/cass/title.Controller');
// const { postEnrolled, getEnrolled, putEnrolled, deleteEnrolled } = require('../controllers/cass/enrolled.Controller');

// Titles
router.post('/postTitle', postTitle);
router.get('/getTitle/:title', getTitle);
router.put('/updateTitle/:title', putTitle);
router.delete('/deleteTitle/:title', deleteTitle);

// Enrolled
router.post('/postEnrolled', postEnrolled);
router.get('/getEnrolled/:id', getEnrolled);
router.put('/updateEnrolled/:id', putEnrolled);
router.delete('/deleteEnrolled/:id', deleteEnrolled);

// Enrolled
// router.post('/postEnrolled', postEnrolled);
// router.get('/getEnrolled/:title', getEnrolled);
// router.put('/updateEnrolled/:title', putEnrolled);
// router.delete('/deleteEnrolled/:title', deleteEnrolled);

module.exports = router;