// Builder
// Complexity: 2/3, Popularity: 3/3

/*
 * Builder is a creational design pattern which allows constructing complex objects step by step.
 * Unlike other creational patters, Builder doesn't require products to have a common interface.
 * That makes it possible to produce different products using the same construction process.
 */

/*
 * Usage examples: It's especially useful when you need to create an object with lots of possible 
 * configuration options.
 * Identification: The Builder pattern can be recognized in a class, which has a single creation method
 * and several methods to configure the resulting object. Builder methods often support chaining 
 * (e.g. someBuilder.setValueA(1).setValueB(1))
 */

interface Builder {
  producePartA(): void;
  producePartB():  void;
  producePartC():  void;
}

class BuilderProduct1 {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(', ')}`);
  }
}

class ConcreteBuilder1 implements Builder {
  private product: BuilderProduct1;

  constructor() {
    this.product = new BuilderProduct1();
  }

  public producePartA(): void {
    this.product.parts.push('PartA1');
  };

  public producePartB(): void {
    this.product.parts.push('PartB1');
  }

  public producePartC(): void {
    this.product.parts.push('PartC1');
  }

  public getProduct(): BuilderProduct1 {
    const result = this.product;
    this.product = new BuilderProduct1();
    return result;
  }
}

class Director {
  private builder: Builder;

  constructor() {
    this.builder = new ConcreteBuilder1();
  }

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalProduct(): void {
    this.builder.producePartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}

const director = new Director();
const builder = new ConcreteBuilder1();

director.setBuilder(builder);

console.log('Standard basic featured product:');
director.buildMinimalProduct();
builder.getProduct().listParts();

console.log('Standard full featured product:');
director.buildFullFeaturedProduct();
builder.getProduct().listParts();

console.log('Custom product:');
builder.producePartA();
builder.producePartB();
builder.getProduct().listParts();
