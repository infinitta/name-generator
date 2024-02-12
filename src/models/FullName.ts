import Name from "./Name";
import Surname from "./Surname";

class FullName {
  name: Name;
  surname: Surname;

  constructor(name: Name, surname: Surname) {
    this.name = name;
    this.surname = surname;
  }

  get gender() {
    return this.name.gender;
  }

  get initials() {
    return this.name.initial + this.surname.initial;
  }

  get value() {
    return `${this.name.noun} ${this.surname.noun}`;
  }

  get description() {
    return `${this.name.description}\n${this.surname.description}`;
  }
}

export default FullName;
