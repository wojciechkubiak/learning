// Adapter
// Complexity: 1/3, Popularity: 3/3

/*
 * Structural pattern that allows two incompatible objects to work with each other.
 * It's often used to combine both old and modern code.
 */

/*
 * Usage examples: The adapter pattern is pretty common in TypeScript code. It's very often used in systems based on some
 * legacy code. In such cases, Adapters make legacy code work with modern classes.
 * Identification: Adapter is recognizable by a constructor which takes an instance of a different abstract/interface type.
 * When the adapter receives a call to any of its methods, it translates parameters to the appropriate format and then directs the
 * call to one or several methods of the wrapped object.
 */

/*
 * Pros:
 * - Single Responsibility Principle - you can separate the interface or data
 * conversion code from the primary business logic of the program.
 * - Open/Closed Principle - you can introduce new types of adapters into the program without breaking existing client code.
 * Cons:
 * - Code may become complicated since you need to introduce a lot of new interfaces and classes.
 * Sometimes it's simpler just to change the service class so that it matches the rest of your code.
 */

/*
 * -> 1. Make sure you have at least 2 classes with incompatible interfaces.
 * - Utility class you can't change (other producer, legacy or with too many dependencies).
 * - One or more client classes, which would benefit from usage of utility class.
 * -> 2. Declare client interface and describe communication between clients and service.
 * -> 3. Create the adapter class and make it follow the client interface. Leave methods empty.
 * -> 4. Create service object reference inside adapter class.
 * -> 5. Implement all the methods of the client interface in the adapter class.
 * -> 6. Output.
 */

// -> 1
// -> 2
class AdapterProduct {
  public getProductPrice(): number {
    return 20;
  }
}

// Service class/object.
class AdapterPrecisionProduct {
  public getWeirdProductPrice(): number {
    return 20.11313131;
  }
}

// -> 3
class Adapter extends AdapterProduct {
  // -> 4
  private weirdProduct: AdapterPrecisionProduct;

  constructor(product: AdapterPrecisionProduct) {
    super();
    this.weirdProduct = product;
  }

  // -> 5
  public getProductPrice(): number {
    const result = +this.weirdProduct.getWeirdProductPrice().toFixed(0);
    return result;
  }
}

// -> 6
const showAdaptedPrice = (adapterProduct: AdapterProduct) =>
  console.log(adapterProduct.getProductPrice());

const adapterProduct = new AdapterProduct();
showAdaptedPrice(adapterProduct);

const adapterPrecisionProduct = new AdapterPrecisionProduct();
const adapter = new Adapter(adapterPrecisionProduct);
showAdaptedPrice(adapter);
