import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instanceCount += 1;
  }

  static createdRacesInstances() {
    return Elf.instanceCount;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}