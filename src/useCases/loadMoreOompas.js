module.exports = class LoadMoreOompas {
  constructor (oompaStorage) {
    this.oompaStorage = oompaStorage;
  }

  async execute() {
    try {
      return await this.oompaStorage.loadMoreOompas();
    } catch (error) {
      throw new Error(error);
    }
  }
};
