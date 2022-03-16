// Strategy
// Complexity: 1/3, Popularity: 2/3

/*
 * Strategy is a behavioral design pattern that turns a set of behaviors into objects and makes them interchangeable inside original context object.
 * The original object, called context, holds a reference to a strategy object and delegates it executing the behavior. In order to change the way the 
 * context performs its work, other objects may replace the currently linked strategy object with another one.
 */

/*
 * Usage examples: The Strategy pattern is very common in TypeScript code. It’s often used in various frameworks to provide users a way to change 
 * the behavior of a class without extending it.
 * Identification: Strategy pattern can be recognized by a method that lets nested object do the actual work, as well as the setter that allows 
 * replacing that object with a different one.
 */

interface Strategy {
  doAlgorithm(data: string[]): string[];
}

class StrategyContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
    const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
    console.log(result.join(','));
  }
}

class ConcreteStrategyA implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

class ConcreteStrategyB implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort().reverse();
  }
}

const ctx = new StrategyContext(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
ctx.doSomeBusinessLogic();

console.log('');

console.log('Client: Strategy is set to reverse sorting.');
ctx.setStrategy(new ConcreteStrategyB());
ctx.doSomeBusinessLogic();