// Command
// Complexity: 2/3, Popularity: 3/3
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.state = 0;
        this.observers = [];
    }
    ConcreteSubject.prototype.attach = function (observer) {
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    };
    ConcreteSubject.prototype.detach = function (observer) {
        var observerIdx = this.observers.indexOf(observer);
        if (observerIdx === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIdx, 1);
        console.log('Subject: Detached an observer');
    };
    ConcreteSubject.prototype.notify = function () {
        console.log('Subject: Notifying observers...');
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    ConcreteSubject.prototype.someBusinessLogic = function () {
        console.log('\nSubject: I\'m doinb something important.');
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log("Subject: My state has just changed to: ".concat(this.state));
        this.notify();
    };
    return ConcreteSubject;
}());
var ConcreteObserver1 = /** @class */ (function () {
    function ConcreteObserver1() {
    }
    ConcreteObserver1.prototype.update = function (subject) {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    };
    return ConcreteObserver1;
}());
var ConcreteObserver2 = /** @class */ (function () {
    function ConcreteObserver2() {
    }
    ConcreteObserver2.prototype.update = function (subject) {
        if (subject instanceof ConcreteSubject && subject.state === 0 || subject.state >= 2) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    };
    return ConcreteObserver2;
}());
var subject = new ConcreteSubject();
var observer1 = new ConcreteObserver1();
subject.attach(observer1);
var observer2 = new ConcreteObserver2();
subject.attach(observer2);
subject.someBusinessLogic();
subject.someBusinessLogic();
subject.detach(observer2);
subject.someBusinessLogic();
