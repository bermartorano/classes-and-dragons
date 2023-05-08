import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instanceCount += 1;
  }

  static createdRacesInstances() {
    return Halfling.instanceCount;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}