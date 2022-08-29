const express = require('express');
const path = require('path');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares globais
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
// const PetsRouter = require('./routes/PetsRouter');
// app.use('/pets', PetsRouter);

module.exports = app;
