import Noun from "./Noun";

class Surname extends Noun {
  get description() {
    return `Sobrenome ${this.origin} ${this.rarity}`;
  }
}

export default Surname;
