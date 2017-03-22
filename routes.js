const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', (req, res) => {
  res.writeHead(200, {'content-type':'text/plain'});
  res.end('Hello world!');
});

module.exports = router;
