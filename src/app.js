const express = require('express');
const createRouter = require('./infra/router/router');

const app = express();

app.use(express.json());

app.use(createRouter());

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Ocorreu um erro interno.' });
});

module.exports = app;
