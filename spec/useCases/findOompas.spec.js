const expect = require('chai').expect;
const FindOompas = require('../../src/useCases/findOompas');
const OompaStorageMock = require('../mocks/oompaStorageMock');
const oompaDataMock = require('../mocks/oompaDataMock');
const OompaFactory = require('../../src/services/oompaFactory');

describe('Find Ommpa Loompas Use Case', () => {
  let findOmmpas,
    oompaStorage,
    oompaFactory;

  beforeEach(() => {
    oompaFactory = new OompaFactory();
  });

  it('It should return all the Oompa Loompas in database', (done) => {
    oompaStorage = new OompaStorageMock(oompaDataMock);
    findOmmpas = new FindOompas(oompaStorage, oompaFactory);
    findOmmpas.execute().then((data) => {
      expect(data).to.have.lengthOf(2);
      done();
    });
  });

  it('It should return no Oompa Loompas if database is empty', (done) => {
    oompaStorage = new OompaStorageMock([]);
    findOmmpas = new FindOompas(oompaStorage, oompaFactory);
    findOmmpas.execute().then((data) => {
      expect(data).to.have.lengthOf(0);
      done();
    });
  });

  it('It should return error if database is not available', (done) => {
    oompaStorage = new OompaStorageMock();
    findOmmpas = new FindOompas(oompaStorage, oompaFactory);
    findOmmpas.execute().catch((error) => {
      expect(error.message).equals('Error: Ooooooooompaluma! :(');
      done();
    });
  });
});
