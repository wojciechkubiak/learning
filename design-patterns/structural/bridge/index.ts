// Bridge
// Complexity: 3/3, Popularity: 1/3

/*
 * Structural pattern that divides business logic or huge class into separate class hierarchies that can be developed independently.
 * One of these hierarchies (often called the Abstraction) will get a reference to an object of the second hierarchy (Implementation).
 * The abstraction will be able to delegate some (sometimes, most) of its calls to the implementations object. Since all implementations
 * will have common interface, they'd be interchangeable inside the abstraction. 
 */

/*
 * Usage examples: The Bridge pattern is especially useful when dealing with cross-platform apps, supporting multiple types of database
 * servers or working with several API providers of a certain kind (for example. cloud platforms, social networks, etc.)
 * Identification: Bridge can be recognized by a clear destinction between some controlling entity and several different platforms that
 * it relies on.
 */

interface Implementation {
  operationImplementation(): string;
}

class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
      this.implementation = implementation;
  }

  public operation(): string {
      const result = this.implementation.operationImplementation();
      return `Abstraction: Base operation with:\n${result}`;
  }
}

class ExtendedAbstraction extends Abstraction {
  public operation(): string {
      const result = this.implementation.operationImplementation();
      return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
}

class ConcreteImplementationA implements Implementation {
  public operationImplementation(): string {
      return 'ConcreteImplementationA: Here\'s the result on the platform A.';
  }
}

class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
      return 'ConcreteImplementationB: Here\'s the result on the platform B.';
  }
}

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);

console.log(abstraction.operation());

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
console.log(abstraction.operation());