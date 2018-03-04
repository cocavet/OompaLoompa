const Oompa = require('./oompa');

module.exports = class EmployeeOompa extends Oompa {
  constructor ({id, first_name, last_name, gender, image, profession, email, age, country, height, oompaType, color, food, random_string, song}) {
    super({id, first_name, last_name, gender, image, profession, email, age, country, height, oompaType, color, food, random_string, song});
  }
}
