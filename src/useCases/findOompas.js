module.exports = class FindOompas {
  constructor (oompaStorage) {
    this.oompaStorage = oompaStorage;
  }

  async execute() {
    try {
      return await this.oompaStorage.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }
};
