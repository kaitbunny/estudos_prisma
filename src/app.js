const express = require('express');
const createRouter = require('./infra/router/router');

const app = express();

app.use(express.json());

app.use(createRouter());

app.use((req, res, next) => {
  res.status(404).json({ error: 'Rota não encontrada.' });
});

app.use((err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: err.message || 'Ocorreu um erro interno.'
  });
});

module.exports = app;
