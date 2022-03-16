var BuilderProduct1 = /** @class */ (function () {
    function BuilderProduct1() {
        this.parts = [];
    }
    BuilderProduct1.prototype.listParts = function () {
        console.log("Product parts: ".concat(this.parts.join(', ')));
    };
    return BuilderProduct1;
}());
var ConcreteBuilder1 = /** @class */ (function () {
    function ConcreteBuilder1() {
        this.product = new BuilderProduct1();
    }
    ConcreteBuilder1.prototype.producePartA = function () {
        this.product.parts.push('PartA1');
    };
    ;
    ConcreteBuilder1.prototype.producePartB = function () {
        this.product.parts.push('PartB1');
    };
    ConcreteBuilder1.prototype.producePartC = function () {
        this.product.parts.push('PartC1');
    };
    ConcreteBuilder1.prototype.getProduct = function () {
        var result = this.product;
        this.product = new BuilderProduct1();
        return result;
    };
    return ConcreteBuilder1;
}());
var Director = /** @class */ (function () {
    function Director() {
        this.builder = new ConcreteBuilder1();
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.buildMinimalProduct = function () {
        this.builder.producePartA();
    };
    Director.prototype.buildFullFeaturedProduct = function () {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    };
    return Director;
}());
var director = new Director();
var builder = new ConcreteBuilder1();
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
