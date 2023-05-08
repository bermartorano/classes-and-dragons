import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instanceCount += 1;
  }

  static createdRacesInstances() {
    return Orc.instanceCount;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}