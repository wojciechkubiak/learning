// Template
// Complexity: 1/3, Popularity: 2/3

/*
 * Template Method is a behavioral design pattern that allows you to defines a skeleton of an algorithm in a base class and let
 * subclasses override the steps without changing the overall algorithm’s structure.
 */

/*
 * Usage examples: The Template Method pattern is quite common in TypeScript frameworks. Developers often use it to provide framework users with a simple
 * means of extending standard functionality using inheritance.
 * Identification: Template Method can be recognized by behavioral methods that already have a “default” behavior defined by the base class.
 */

abstract class AbstractClass {
  public templateMethod(): void {
    this.baseOperation1();
    this.requiredOperations1();
    this.baseOperation2();
    this.hook1();
    this.requiredOperation2();
    this.baseOperation3();
    this.hook2();
  }

  protected baseOperation1(): void {
    console.log("AbstractClass says: I am doing the bulk of the work");
  }

  protected baseOperation2(): void {
    console.log(
      "AbstractClass says: But I let subclasses override some operations"
    );
  }

  protected baseOperation3(): void {
    console.log(
      "AbstractClass says: But I am doing the bulk of the work anyway"
    );
  }

  protected abstract requiredOperations1(): void;
  protected abstract requiredOperation2(): void;

  protected hook1(): void {}
  protected hook2(): void {}
}

class ConcreteClass1 extends AbstractClass {
  protected requiredOperations1(): void {
      console.log('ConcreteClass1 says: Implemented Operation1');
  }

  protected requiredOperation2(): void {
      console.log('ConcreteClass1 says: Implemented Operation2');
  }
}

class ConcreteClass2 extends AbstractClass {
  protected requiredOperations1(): void {
      console.log('ConcreteClass2 says: Implemented Operation1');
  }

  protected requiredOperation2(): void {
      console.log('ConcreteClass2 says: Implemented Operation2');
  }

  protected hook1(): void {
      console.log('ConcreteClass2 says: Overridden Hook1');
  }
}

console.log('Same client code can work with different subclasses:');
console.log(new ConcreteClass1().templateMethod());
console.log('');

console.log('Same client code can work with different subclasses:');
console.log(new ConcreteClass2().templateMethod());
