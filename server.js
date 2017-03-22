const express = require('express');

const routes = require('./routes');

const app = express();

let port = process.env.PORT || 8080;

app.use('/', routes);

app.listen(port, () => {
  console.log('Server running at port ' + port);
});
