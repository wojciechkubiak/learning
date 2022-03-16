// Decorator
// Complexity: 2/3, Popularity: 2/3

/*
 * Structural design pattern that allows adding new behaviors to objects dynamically by placing them inside special wrapper objects.
 * Using decorators can wrap objects countless number of times since both target objects and decorators follow the same interface.
 * The resulting object will get a stacking behavior of all wrappers.
 */

/*
 * Usage examples: Related to streams.
 * Identification: Decorator can be recognized by creation methods of constructor that accept objects of the same class or interface 
 * as a current class.
 */

interface DecoratorComponent {
  operation(): string;
}

class ConcreteComponent implements DecoratorComponent {
  public operation(): string {
    return 'ConcreteComponent';
  }
}

class Decorator implements DecoratorComponent {
  protected component: DecoratorComponent;

  constructor(component: DecoratorComponent) {
    this.component = component;
  }

  public operation(): string {
    return this.component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

const simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
console.log(`RESULT: ${simple.operation()}`);

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
console.log(`RESULT: ${decorator2.operation()}`);
