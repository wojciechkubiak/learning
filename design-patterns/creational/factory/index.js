var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shop = /** @class */ (function () {
    function Shop() {
    }
    Shop.prototype.calculatePrice = function () {
        var product = this.getProduct();
        return product.getPrice() * 1.23;
    };
    return Shop;
}());
var ShopCreator1 = /** @class */ (function (_super) {
    __extends(ShopCreator1, _super);
    function ShopCreator1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShopCreator1.prototype.getProduct = function () {
        return new Product1();
    };
    return ShopCreator1;
}(Shop));
var ShopCreator2 = /** @class */ (function (_super) {
    __extends(ShopCreator2, _super);
    function ShopCreator2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShopCreator2.prototype.getProduct = function () {
        return new Product2();
    };
    return ShopCreator2;
}(Shop));
var Product1 = /** @class */ (function () {
    function Product1() {
    }
    Product1.prototype.getPrice = function () {
        return 20;
    };
    return Product1;
}());
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    Product2.prototype.getPrice = function () {
        return 25;
    };
    return Product2;
}());
var showPrice = function (shopCreator) { return console.log(shopCreator.calculatePrice()); };
console.log('Product1:');
showPrice(new ShopCreator1());
console.log('Product2:');
showPrice(new ShopCreator2());
