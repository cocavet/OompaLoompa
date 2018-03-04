module.exports = class FindOompaById {
  constructor (oompaStorage) {
    this.oompaStorage = oompaStorage;
  }

  async execute (id) {
    try {
      return await this.oompaStorage.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }
};
