// Bridge
// Complexity: 2/3, Popularity: 2/3
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
 * Composite is a structural design pattern that allows composing objects into a tree-like structure and work with it as if it
 * was a singular object.
 * Composite became a pretty popular solution for the most problems that require building a tree structure.
 * Composite's great feature is the ability to run methods recursively over the whole tree structure and sum up the results.
 */
/*
 * Usage examples: It's often used to represent hierarchies of user interface components or the code that works with graphs.
 * Identification: If you haev an object tree and each object of a tree is a part of the same class hierarchy, this is most
 * likely a composite. If methods of these classes delegate the work to child objects and do it via the base class/interface
 * of the hierarchy, this is definitely a composite.
 */
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.setParent = function (parent) {
        this.parent = parent || null;
    };
    Component.prototype.getParent = function () {
        return this.parent || null;
    };
    Component.prototype.add = function (component) { };
    Component.prototype.remove = function (component) { };
    Component.prototype.isComposite = function () {
        return false;
    };
    return Component;
}());
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leaf.prototype.operation = function () {
        return "Leaf";
    };
    return Leaf;
}(Component));
var Composite = /** @class */ (function (_super) {
    __extends(Composite, _super);
    function Composite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    Composite.prototype.add = function (component) {
        this.children.push(component);
        component.setParent(this);
    };
    Composite.prototype.remove = function (component) {
        var componentIdx = this.children.indexOf(component);
        this.children.splice(componentIdx, 1);
        component.setParent();
    };
    Composite.prototype.isComposite = function () {
        return true;
    };
    Composite.prototype.operation = function () {
        var results = [];
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            results.push(child.operation());
        }
        return "Branch(".concat(results.join("+"), ")");
    };
    return Composite;
}(Component));
var tree = new Composite();
var branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
var branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log('Client: Now I\'ve got a composite tree:');
console.log("RESULT: ".concat(tree.operation()));
