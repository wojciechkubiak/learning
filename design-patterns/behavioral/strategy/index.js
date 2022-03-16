// Command
// Complexity: 1/3, Popularity: 2/3
var StrategyContext = /** @class */ (function () {
    function StrategyContext(strategy) {
        this.strategy = strategy;
    }
    StrategyContext.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    StrategyContext.prototype.doSomeBusinessLogic = function () {
        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        var result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    };
    return StrategyContext;
}());
var ConcreteStrategyA = /** @class */ (function () {
    function ConcreteStrategyA() {
    }
    ConcreteStrategyA.prototype.doAlgorithm = function (data) {
        return data.sort();
    };
    return ConcreteStrategyA;
}());
var ConcreteStrategyB = /** @class */ (function () {
    function ConcreteStrategyB() {
    }
    ConcreteStrategyB.prototype.doAlgorithm = function (data) {
        return data.sort().reverse();
    };
    return ConcreteStrategyB;
}());
var ctx = new StrategyContext(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
ctx.doSomeBusinessLogic();
console.log('');
console.log('Client: Strategy is set to reverse sorting.');
ctx.setStrategy(new ConcreteStrategyB());
ctx.doSomeBusinessLogic();
