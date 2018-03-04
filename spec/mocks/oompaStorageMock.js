module.exports = class OompaStorageMock {
  constructor (data) {
    this.data = data;
  }

  findAll () {
    return new Promise((resolve, reject) => {
      if (this.data) {
        resolve(this.data);
      } else {
        reject(new Error('Ooooooooompaluma! :('));
      }
    });
  }
};
