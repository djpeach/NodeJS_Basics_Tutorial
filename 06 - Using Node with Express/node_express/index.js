const http = require('http');
const express = require('express');
const app = express();

const index_router = require('./routes/index_routes');
const users_router = require('./routes/users_routes');

app.use('/', index_router);
app.use('/users', users_router);

app.listen(3000, () => {
    console.log('Server now running with express at http://localhost:3000')
  });