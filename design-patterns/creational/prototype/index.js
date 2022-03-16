// Prototype
// Complexity: 1/3, Popularity:2/3
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Prototype = /** @class */ (function () {
    function Prototype() {
    }
    Prototype.prototype.clone = function () {
        var clone = Object.create(this);
        if (this.component) {
            clone.component = Object.create(this.component);
            clone.circularReference = __assign(__assign({}, this.circularReference), { prototype: __assign({}, this) });
        }
        return clone;
    };
    return Prototype;
}());
var ComponentWithBackReference = /** @class */ (function () {
    function ComponentWithBackReference(prototype) {
        this.prototype = prototype;
    }
    return ComponentWithBackReference;
}());
var p1 = new Prototype();
p1.primitive = 245;
p1.component = new Date();
p1.circularReference = new ComponentWithBackReference(p1);
var p2 = p1.clone();
if (p1.primitive === p2.primitive) {
    console.log("Primitive field values have been carried over to a clone. Yay!");
}
else {
    console.log("Primitive field values have not been copied. Booo!");
}
if (p1.component === p2.component) {
    console.log("Simple component has not been cloned. Booo!");
}
else {
    console.log("Simple component has been cloned. Yay!");
}
if (p1.circularReference === p2.circularReference) {
    console.log("Component with back reference has not been cloned. Booo!");
}
else {
    console.log("Component with back reference has been cloned. Yay!");
}
if (p1.circularReference.prototype === p2.circularReference.prototype) {
    console.log("Component with back reference is linked to original object. Booo!");
}
else {
    console.log("Component with back reference is linked to the clone. Yay!");
}
