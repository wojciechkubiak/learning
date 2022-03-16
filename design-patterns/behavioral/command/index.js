// Command
// Complexity: 1/3, Popularity: 3/3
var SimpleCommand = /** @class */ (function () {
    function SimpleCommand(payload) {
        this.payload = payload;
    }
    SimpleCommand.prototype.execute = function () {
        console.log("SimpleCommand: See, I can do simple things like printing (".concat(this.payload, ")"));
    };
    return SimpleCommand;
}());
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.doSomething = function (a) {
        console.log("Receiver: Working on (".concat(a, ".)"));
    };
    Receiver.prototype.doSomethingElse = function (b) {
        console.log("Receiver: Also working on (".concat(b, ".)"));
    };
    return Receiver;
}());
var ComplexCommand = /** @class */ (function () {
    function ComplexCommand(receiver, a, b) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }
    ComplexCommand.prototype.execute = function () {
        console.log("ComplexCommand: Complex stuff should be done by a receiver object.");
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    };
    return ComplexCommand;
}());
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    Invoker.prototype.setOnStart = function (command) {
        this.onStart = command;
    };
    Invoker.prototype.setOnFinish = function (command) {
        this.onFinish = command;
    };
    Invoker.prototype.isCommand = function (object) {
        return object.execute !== undefined;
    };
    Invoker.prototype.doSomethingImportant = function () {
        console.log("Invoker: Does anybody want something done before I begin?");
        if (this.onStart && this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
        console.log("Invoker: ...doing something really important...");
        console.log("Invoker: Does anybody want something done after I finish?");
        if (this.onFinish && this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    };
    return Invoker;
}());
var invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Say Hi!'));
var receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));
invoker.doSomethingImportant();
