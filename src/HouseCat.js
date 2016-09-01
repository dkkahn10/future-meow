
import { Felid } from './Felid.js';

class HouseCat extends Felid {
  constructor (name, favoriteFood, ownerName) {
    // Felid.call(this, name, favoriteFood);
    super(name, favoriteFood);
    this.ownerName = ownerName;
  }

  huntForFood() {
    return `Goes to kitchen, knocks over bowl containing ${this.favoriteFood} and eats it from the floor`;
  }

  showAffectionToOwner() {
    return `Brings dead mouse to ${this.ownerName}`;
  }
};
//
// HouseCat.prototype = Object.create(Felid.prototype);
// HouseCat.prototype.constructor = HouseCat;


export { HouseCat };
