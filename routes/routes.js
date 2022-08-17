const express = require('express');
const app = express();

app.use(require('./socios-de-negocio'));

module.exports = app;