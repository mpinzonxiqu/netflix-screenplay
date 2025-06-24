export class Actor {
  constructor(public name: string) {}

  whoCan(...abilities: any[]) {
    abilities.forEach(ability => {
      const name = ability.constructor.name;
      (this as any)[name] = ability;
    });
    return this;
  }

  abilityTo<T>(ability: new () => T): T {
    return (this as any)[ability.name];
  }
}
