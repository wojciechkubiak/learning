// Adapter
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
/*
 * Structural pattern that allows two incompatible objects to work with each other
 * It's often used to combine both old and modern code.
 */
var AdapterProduct = /** @class */ (function () {
    function AdapterProduct() {
    }
    AdapterProduct.prototype.getProductPrice = function () {
        return 20;
    };
    return AdapterProduct;
}());
var AdapterPrecisionProduct = /** @class */ (function () {
    function AdapterPrecisionProduct() {
    }
    AdapterPrecisionProduct.prototype.getWeirdProductPrice = function () {
        return 20.11313131;
    };
    return AdapterPrecisionProduct;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(product) {
        var _this = _super.call(this) || this;
        _this.weirdProduct = product;
        return _this;
    }
    Adapter.prototype.getProductPrice = function () {
        var result = +this.weirdProduct.getWeirdProductPrice().toFixed(0);
        return result;
    };
    return Adapter;
}(AdapterProduct));
var showAdaptedPrice = function (adapterProduct) {
    return console.log(adapterProduct.getProductPrice());
};
var adapterProduct = new AdapterProduct();
showAdaptedPrice(adapterProduct);
var adapterPrecisionProduct = new AdapterPrecisionProduct();
var adapter = new Adapter(adapterPrecisionProduct);
showAdaptedPrice(adapter);
