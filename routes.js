const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const rooms = require('./rooms');

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

router.get('/fire', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.writeHead(200, {'content-type':'application/json'});
  rooms.returnRooms((roomlist) => {
    /*roomlist.forEach((room) => {
      res.write(JSON.stringify(room));
    });*/
    res.write(JSON.stringify(roomlist));
  });
  res.end();
});

router.post('/fire', (req, res) => {

});

module.exports = router;
