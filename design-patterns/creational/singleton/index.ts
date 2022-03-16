// Singleton
// Complexity: 1/3, Popularity:2/3

/*
 * Pattern that ensures that only one object of its kind exist and provides a single point of access to
 * it for any other code.
 * Singleton has almost the same pros and cons as global variables. Although they're super-handy, they break the modularity of
 * your code.
 * You can't just use a class that depends on Singleton in some other context. You'll have to carry the Singleton class as well.
 * Most of the time, this limitation comes up during the creation of unit tests.
 */

/*
 * Usage examples: A lot of developers consider the Singleton pattern an antipattern. That's why it's usage is on the decline in
 * TypeScript code.
 * Identification: Singleton can be recognized by a static creation method, which returns the same cached object.
 */

class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public someBusinessLogic() {}
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

if (s1 === s2) {
  console.log("Singleton works, both variables contain the same instance.");
} else {
  console.log("Singleton failed, variables contain different instances.");
}
