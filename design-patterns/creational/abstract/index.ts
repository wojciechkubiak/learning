// Abstract Factory
// Complexity: 2/3, Popularity: 3/3

/*
 * Pattern that solves the problem of creating entire product families
 * without specifying their concrete classes.
 * Abstract Factory defines an interface for creating all distinct products
 * but leaves the actual product creation to concrete factory classes. Each factory type 
 * corresponds to a certain product variety.
 * The client code calls the creation methods of a factory object instead of creating products directly 
 * with a constructor call (new operator). Since a factory corresponds to a single product variant, all 
 * its products will be compatible.
 */

/*
 * Usage examples: Many frameworks and libraries use it to provide a way to extend and customize their standard  
 * components.
 * Identification: The pattern is easy to recognize by methods, which return a factory object. Then, the factory 
 * is used for creating specific sub-components.
 */

interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

interface AbstractProductA {
  usefulFunctionA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
    return 'The result of the product A1.';
  }
}

class ConcreteProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
    return 'The result of the product A2.';
  }
}

interface AbstractProductB {
  usefulFunctionB(): string;

  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

class ConcreteProductB1 implements AbstractProductB {
  public usefulFunctionB(): string {
    return 'The result of the product B1.';
  }

  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}

class ConcreteProductB2 implements AbstractProductB {
  public usefulFunctionB(): string {
    return 'The result of the product B2.';
  }

  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}

const factory1 = new ConcreteFactory1();
const productA1 = factory1.createProductA();
const productB1 = factory1.createProductB();
console.log(productB1.usefulFunctionB());
console.log(productB1.anotherUsefulFunctionB(productA1));

const factory2 = new ConcreteFactory2();
const productA2 = factory2.createProductA();
const productB2 = factory2.createProductB();
console.log(productB2.usefulFunctionB());
console.log(productB2.anotherUsefulFunctionB(productA2));