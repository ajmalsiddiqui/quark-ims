const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();

let port = process.env.PORT || 8080;

app.use('/', routes);

app.use(express.static('client'));
app.use(express.static('client/files'));

app.listen(port, () => {
  console.log('Server running at port ' + port);
});
