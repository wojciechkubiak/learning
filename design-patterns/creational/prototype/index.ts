// Prototype
// Complexity: 1/3, Popularity:2/3

/*
 * Pattern that allows cloning objects, even complex ones, without coupling to their specific classes.
 * All prototype classes should have a common interface that makes it possible to copy objects even if their concrete classes
 * are unknown. Prototype objects can produce full copies since objects of the same class can access each other's private
 * fields.
 */

/*
 * Usage examples: The Prototype pattern is available in TypeScript out of the box with a JavaScript's native Object.assign()
 * method.
 * Identification: The prototype can be easily recognized by a clone or copy methods, etc.
 */

class Prototype {
  public primitive: any;
  public component?: object;
  public circularReference?: ComponentWithBackReference;

  public clone(): this {
    const clone = Object.create(this);

    if (this.component) {
      clone.component = Object.create(this.component);

      clone.circularReference = {
        ...this.circularReference,
        prototype: { ...this },
      };
    }

    return clone;
  }
}

class ComponentWithBackReference {
  public prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

const p1 = new Prototype();
p1.primitive = 245;
p1.component = new Date();
p1.circularReference = new ComponentWithBackReference(p1);
const p2 = p1.clone();

if (p1.primitive === p2.primitive) {
  console.log("Primitive field values have been carried over to a clone. Yay!");
} else {
  console.log("Primitive field values have not been copied. Booo!");
}
if (p1.component === p2.component) {
  console.log("Simple component has not been cloned. Booo!");
} else {
  console.log("Simple component has been cloned. Yay!");
}

if (p1.circularReference === p2.circularReference) {
  console.log("Component with back reference has not been cloned. Booo!");
} else {
  console.log("Component with back reference has been cloned. Yay!");
}

if (p1.circularReference.prototype === p2.circularReference!.prototype) {
  console.log(
    "Component with back reference is linked to original object. Booo!"
  );
} else {
  console.log("Component with back reference is linked to the clone. Yay!");
}
