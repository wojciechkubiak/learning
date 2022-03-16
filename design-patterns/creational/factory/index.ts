// Konstruktor wirtualny, Virtual constructor, Factory Method
// Complexity: 1/3, Popularity: 3/3

/*
 * Pattern that provides an interface for creating objects in a superclass, allowing
 * subclasses to alter the type of objects that will be created.
 */

/*
 * Usage examples: It's very useful when you need to provide a high level of flexiblity of your code.
 * Identification: Factory methods can be recognized by creation methods, which create objects from 
 * concrete classes, but return them as objects of abstract type or interface.
 */

/*
 * Pros:
 * - You avoid tight coupling between the creator and the concrete products
 * - Single Responsibility Principle - you can move the product creation code into one place in the program, making the code
 * easier to support
 * - Open/Closed Principle - you can introduce new types of products into the program without breaking existing client code
 * Cons:
 * - Code may become complicated since you need to introduce a lot of new subclasses only to implement this pattern.
 * The best case scenario is when you're introducing the pattern into existing hierarchy of creator classes.
 */

/*
 * Declares operations all Products must implement.
 * -> 1. Create interface. All products should be compatible with Product interface.
 * This interface should implement all the methods that have sense for each product.
 * -> 2. Create empty factory creator method inside creator class.
 * -> 3. In the creator's code find all references to product constructors. One by one, replace them with calls to the factory method, 
 * while extracting the product creation code into the factory method.
 * -> 4. Create a set of creator subclasses for each type of product listed in the factory method.
 * ------------
 * If there are too many product types and it doesn't make sense to create subclasses for all of them, you can reuse the control parameter 
 * from the base class in subclasses.
 * If, after all of the extractions the base factory method has become empty, you can make it abstract. 
 * If there's something left, you can make it a default behaviour of the method.
 */

// -> 1
interface FactoryProduct {
  getPrice(): number;
}

/*
 * Shop class declares the factory method that is supposed to return an Product.
 * Shop subclasses usually provide implementation of that method.
 */
abstract class Shop {
  /*
   * It may also provide some default implementation.
   * -> 2
   * Return type should be compatible with shared products
   */
  public abstract getProduct(): FactoryProduct;

  public calculatePrice(): number {
    // Call the factory method to create a Product object.
    const product = this.getProduct();

    // Return price.
    return product.getPrice() * 1.23;
  }
}

/*
 * ShopCreators override the factory method in order to change the resulting product's type.
 * -> 3
 */
class ShopCreator1 extends Shop {
  public getProduct(): FactoryProduct {
    return new FactoryProduct1();
  }
}

class ShopCreator2 extends Shop {
  public getProduct(): FactoryProduct {
    return new FactoryProduct2();
  }
}

/*
 * Various implementations of Product interface.
 * -> 4
 */
class FactoryProduct1 implements FactoryProduct {
  getPrice(): number {
    return 20;
  }
}

class FactoryProduct2 implements FactoryProduct {
  getPrice(): number {
    return 25;
  }
}

// Output.
const showPrice = (shopCreator: Shop) =>
  console.log(shopCreator.calculatePrice());

console.log("Product1:");
showPrice(new ShopCreator1());

console.log("Product2:");
showPrice(new ShopCreator2());
