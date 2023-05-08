import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instanceCount += 1;
  }

  static createdRacesInstances() {
    return Dwarf.instanceCount;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}