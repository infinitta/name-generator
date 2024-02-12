import Gender from "enums/Gender";
import Noun from "./Noun";

class Name extends Noun {
  gender: Gender;

  constructor(name: string, gender: string, origin: string, rarity: string) {
    super(name, origin, rarity);
    this.gender = gender as Gender;
  }

  get description() {
    return `Nome ${this.origin} ${this.gender} ${this.rarity}`;
  }
}

export default Name;
