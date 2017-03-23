const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const rooms = require('./rooms');
const mailer = require('./mailer');

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
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Origin', 'http://quark-ims.herokuapp.com');
  res.writeHead(200, {'content-type':'application/json'});
  rooms.returnRooms((roomlist) => {
    res.write(JSON.stringify(roomlist));
  });
  res.end();
});

router.post('/fire', (req, res) => {
  let data = req.body;
  console.log(data);
  res.writeHead(200, {'content-type':'text/plain'});
  if(data.estatus){
    rooms.setE(data.id);
  }
  res.end('Yo bro');
});

router.post('/notify', (req, res) => {
  let data = req.body;
  mailer.setOptions([req.body.room]);
  mailer.send();
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end('Concerned personnel of authority have been notified by email.');
});

module.exports = router;
