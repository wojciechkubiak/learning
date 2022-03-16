// Iterator
// Complexity: 2/3, Popularity: 3/3
var AlphabeticalorderIterator = /** @class */ (function () {
    function AlphabeticalorderIterator(collection, reverse) {
        if (reverse === void 0) { reverse = false; }
        this.position = 0;
        this.reverse = false;
        this.collection = collection;
        this.reverse = reverse;
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }
    AlphabeticalorderIterator.prototype.rewind = function () {
        this.position = this.reverse ? this.collection.getCount() - 1 : 0;
    };
    AlphabeticalorderIterator.prototype.current = function () {
        return this.collection.getItems()[this.position];
    };
    AlphabeticalorderIterator.prototype.key = function () {
        return this.position;
    };
    AlphabeticalorderIterator.prototype.next = function () {
        var item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    };
    AlphabeticalorderIterator.prototype.valid = function () {
        if (this.reverse) {
            return this.position >= 0;
        }
        return this.position < this.collection.getCount();
    };
    return AlphabeticalorderIterator;
}());
var WordsCollection = /** @class */ (function () {
    function WordsCollection() {
        this.items = [];
    }
    WordsCollection.prototype.getItems = function () {
        return this.items;
    };
    WordsCollection.prototype.getCount = function () {
        return this.items.length;
    };
    WordsCollection.prototype.addItem = function (item) {
        this.items.push(item);
    };
    WordsCollection.prototype.getIterator = function () {
        return new AlphabeticalorderIterator(this);
    };
    WordsCollection.prototype.getReverseIterator = function () {
        return new AlphabeticalorderIterator(this, true);
    };
    return WordsCollection;
}());
var collection = new WordsCollection();
collection.addItem("First");
collection.addItem("Second");
collection.addItem("Third");
var iterator = collection.getIterator();
console.log("Straight traversal:");
while (iterator.valid()) {
    console.log(iterator.next());
}
console.log("");
console.log("Reverse traversal:");
var reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}
