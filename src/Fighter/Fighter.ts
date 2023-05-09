import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter{
  defense: number,
  energy?: Energy,
  special?(enemy: Fighter): void,
  levelUp(): void,
}

// export default interface Fighter {
//   lifePoints: number,
//   strength: number,
//   defense: number,
//   energy?: Energy,
//   attack(enemy: Fighter): void,
//   special?(enemy: Fighter): void,
//   levelUp(): void,
//   receiveDamage(attackPoints: number): number,
// }
