module.exports = class OompaStorage {
  constructor (storage, oompaFactory) {
    this.storage = storage;
    this.oompaFactory = oompaFactory;
  }

  findAll () {
    return this.processQuery({query: 'SELECT f.*, o.* FROM oompa o INNER JOIN favorite f ON (o.id = f.oompa)'});
  }

  findById (id) {
    return this.processQuery({query: 'SELECT f.*, o.* FROM oompa o INNER JOIN favorite f ON (o.id = f.oompa) WHERE o.id = $id', $id: id});
  }

  loadMoreOompas(page) {
    return this.processQuery({query: 'SELECT f.*, o.* FROM oompa o INNER JOIN favorite f ON (o.id = f.oompa)'});
  }

  processQuery ({query, ...params}) {
    return new Promise((resolve, reject) => {
      this.storage.serialize(() => {
        const oompasArray = [];

        this.storage.each(query, params, (err, row) => {
          if (err) {
            reject(err);
            return;
          }

          oompasArray.push(this.oompaFactory.create(row));
        }, () => {
          resolve(oompasArray);
        });
      });
    });
  }
};
