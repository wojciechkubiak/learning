/*
 * Pattern that provides an interface for creating objects in a superclass, allowing 
 * subclasses to alter the type of objects that will be created.
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

// Declares operations all Products must implement.
interface Product {
    getPrice() : number;
}

/*
 * Shop class declares the factory method that is supposed to return an Product. 
 * Shop subclasses usually provide implementation of that method.
 */
abstract class Shop {
    // It may also provide some default implementation.
    public abstract getProduct() : Product;

    public calculatePrice() : number {
        // Call the factory method to create a Product object.
        const product = this.getProduct();
        
        // Return price.
        return product.getPrice() * 1.23;
    }
}

// ShopCreators override the factory method in order to change the resulting product's type.
class ShopCreator1 extends Shop {
    public getProduct(): Product {
        return new Product1();
    }
}

class ShopCreator2 extends Shop {
    public getProduct(): Product {
        return new Product2();
    }
}

// Various implementations of Product interface.
class Product1 implements Product {
    getPrice(): number {
        return 20;
    }
}

class Product2 implements Product {
    getPrice(): number {
        return 25;
    }
}

// Output.
const showPrice = (shopCreator: Shop) => console.log(shopCreator.calculatePrice());

console.log('Product1:')
showPrice(new ShopCreator1());

console.log('Product2:')
showPrice(new ShopCreator2());