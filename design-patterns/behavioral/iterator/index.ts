// Iterator
// Complexity: 2/3, Popularity: 3/3

/*
 * Iterator is a behavioral design pattern that allows sequential traversal through a complex data structure without exposing its
 * internal details.
 * Thanks to the Iterator, clients can go over elements of different collections in a similar fashion using a single iterator interface.
 */

/*
 * Usage examples: The Iterator pattern is pretty common in TypeScript code. Many frameworks and libraries use it to provide a standard way
 * for traversing their collections.
 * Identification: Iterator is easy to recognize by the navigation methods (such as next, previous and others). Client code that users iterators
 * might not have direct access to collection being traversed.
 */

interface Iter<T> {
  current(): T;
  next(): T;
  key(): number;
  valid(): boolean;
  rewind(): void;
}

interface Aggregator {
  getIterator(): Iter<string>;
}

class AlphabeticalorderIterator implements Iter<string> {
  private collection: WordsCollection;
  private position: number = 0;
  private reverse: boolean = false;

  constructor(collection: WordsCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;

    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  public rewind() {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }

  public current(): string {
    return this.collection.getItems()[this.position];
  }

  public key(): number {
    return this.position;
  }

  public next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }
}

class WordsCollection implements Aggregator {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getIterator(): Iter<string> {
    return new AlphabeticalorderIterator(this);
  }

  public getReverseIterator(): Iter<string> {
    return new AlphabeticalorderIterator(this, true);
  }
}

const collection = new WordsCollection();
collection.addItem("First");
collection.addItem("Second");
collection.addItem("Third");

const iterator = collection.getIterator();

console.log("Straight traversal:");
while (iterator.valid()) {
  console.log(iterator.next());
}

console.log("");
console.log("Reverse traversal:");
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
  console.log(reverseIterator.next());
}
