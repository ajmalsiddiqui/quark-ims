const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', (req, res) => {
  /*res.writeHead(200, {'content-type':'text/plain'});
  res.end('Hello world!');*/
  /*fs.readFile('client/monitor/monitor.html', (err, data) => {
    if(err){
      console.log(err);
    }
    else {
      res.writeHead(200, {'content-type':'text/html'});
      res.write(data);
      res.end();
    }
  });*/
  //res.writeHead(200, {'content-type':'text/html'});
  res.sendFile('client/monitor.html', {root: __dirname});
});

module.exports = router;
