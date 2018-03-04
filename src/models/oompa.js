module.exports = class Oompa {
  constructor ({id, first_name, last_name, gender, image, profession, email, age, country, height, oompaType, color, food, random_string, song }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.image = image;
    this.profession = profession;
    this.email = email;
    this.age = age;
    this.country = country;
    this.height = height;
    this.oompaType = oompaType;
    this.favorite = {
      color: color,
      food: food,
      random_string: random_string,
      song: song
    }
  }
};