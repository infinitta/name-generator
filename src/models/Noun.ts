import Origin from "enums/Origin";
import Rarity from "enums/Rarity";

abstract class Noun {
  noun!: string;
  origin!: Origin;
  rarity!: Rarity;

  constructor(noun: string, origin: string, rarity: string) {
    this.noun = noun;
    this.origin = origin as Origin;
    this.rarity = rarity as Rarity;
  }

  get initial() {
    return this.noun.charAt(0);
  }

  abstract get description(): string;
}

export default Noun;
