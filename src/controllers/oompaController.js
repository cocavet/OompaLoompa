const FindOompas = require('../useCases/findOompas');
const FindOompaById = require('../useCases/findOompaById');
const LoadMoreOompas = require('../useCases/loadMoreOompas');
const OompaStorage = require('../services/oompaStorage');
const localStorage = require('localStorage');
const OompaFactory = require('../services/oompaFactory');
const sqlite3 = require('sqlite3').verbose();

class OompaController {
  constructor (app) {
    let oompaFactory = new OompaFactory();
    let oompaStorage = new OompaStorage(new sqlite3.Database('./data/oompaLoompa.db'), oompaFactory);

    this.app = app;
    this.findOompas = new FindOompas(oompaStorage);
    this.findOompaById = new FindOompaById(oompaStorage);
    this.loadMoreOompas = new LoadMoreOompas(oompaStorage);
  }

  init () {
    this.app.get('/', async (req, res) => {
      try {
        let data;

        if(areOompasInLocalStorge()) {
          data = areOompasInLocalStorge();
        }else {
          data = await this.findOompas.execute();
          saveOompasInLocalStorage(data);
        }

        res.render('index.html', {oompas: data});
      } catch (error) {
        console.error(error);
      }
    });

    this.app.get('/:id', async (req, res) => {
      try {
        let data;
        
        if(isOompaIdInLocalStorge(req.params.id)) {
          data = isOompaIdInLocalStorge(req.params.id);
        }else {
          data = await this.findOompaById.execute(req.params.id);
          saveOompaIdInLocalStorage(data, req.params.id);
        }
        
        res.render('oompaById.html', {oompa: data});
      } catch (error) {
        console.error(error);
      }
    });

    this.app.get('/page/:page', async (req, res) => {
      try {
        let data = await this.findOompas.execute();
        
        res.render('oompas.html', {oompas: data});
      } catch (error) {
        console.error(error);
      }
    });
  }
};

function saveOompasInLocalStorage(data) {
  return localStorage.setItem('oompas', JSON.stringify(data));
}

function saveOompaIdInLocalStorage(data, id) {
  return localStorage.setItem('oompaId'+ id, JSON.stringify(data));
}

function areOompasInLocalStorge() {
  return JSON.parse(localStorage.getItem('oompas'));
}

function isOompaIdInLocalStorge(id) {
  return JSON.parse(localStorage.getItem('oompaId' + id));
}

module.exports = OompaController;
