// Command
// Complexity: 1/3, Popularity: 2/3
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
 * State is a behavioral design pattern that allows an object to change the behavior when its internal state changes.
 * The pattern extracts state-related behaviors into separate state classes and forces the original object to delegate the work to an instance
 * of these classes, instead of acting on its own.
 */
/*
 * Usage examples: The State pattern is commonly used in TypeScript to convert massive switch-base state machines into the objects.
 * Identification: tate pattern can be recognized by methods that change their behavior depending on the objects’ state, controlled externally.
 */
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.setContext = function (context) {
        this.context = context;
    };
    return State;
}());
var Context = /** @class */ (function () {
    function Context(state) {
        this.state = state;
        this.transitionTo(state);
    }
    Context.prototype.transitionTo = function (state) {
        console.log("Context: Transition to ".concat(state === null || state === void 0 ? void 0 : state.constructor.name, "."));
        this.state = state;
        this.state.setContext(this);
    };
    Context.prototype.request1 = function () {
        this.state.handle1();
    };
    Context.prototype.request2 = function () {
        this.state.handle2();
    };
    return Context;
}());
var ConcreteStateA = /** @class */ (function (_super) {
    __extends(ConcreteStateA, _super);
    function ConcreteStateA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteStateA.prototype.handle1 = function () {
        if (this.context) {
            console.log("ConcreteStateA handles request1.");
            console.log("ConcreteStateA wants to change the state of the context.");
            this.context.transitionTo(new ConcreteStateB());
        }
    };
    ConcreteStateA.prototype.handle2 = function () {
        console.log("ConcreteStateA handles request2.");
    };
    return ConcreteStateA;
}(State));
var ConcreteStateB = /** @class */ (function (_super) {
    __extends(ConcreteStateB, _super);
    function ConcreteStateB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteStateB.prototype.handle1 = function () {
        console.log("ConcreteStateB handles request1.");
    };
    ConcreteStateB.prototype.handle2 = function () {
        if (this.context) {
            console.log("ConcreteStateB handles request2.");
            console.log("ConcreteStateB wants to change the state of the context.");
            this.context.transitionTo(new ConcreteStateA());
        }
    };
    return ConcreteStateB;
}(State));
var context = new Context(new ConcreteStateA());
context.request1();
context.request2();
