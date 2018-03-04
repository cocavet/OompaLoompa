const express = require('express');
const nunjucks = require('nunjucks');
const OompaController = require('./controllers/oompaController');

const app = express();

const PORT = process.env.PORT || 2000;
const PATH_TO_TEMPLATES = 'src/views';

app.use(express.static('assets'));
nunjucks.configure(PATH_TO_TEMPLATES, {
  autoescape: true,
  express: app
});

function initControllers () {
  const oompaController = new OompaController(app);
  oompaController.init();
}

function startServer () {
  app.listen(PORT, () => console.log(`Ommpa Loompas are on port ${PORT}!`));
}

initControllers();
startServer();
