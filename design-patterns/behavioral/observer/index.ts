// Observer
// Complexity: 2/3, Popularity: 3/3

/*
 * Observer is behavioral design pattern that allows some objects to notify other objects about changes in their state.
 * The Observer pattern provides a way to subscribe and unsubscribe to and from these events for any object that implements a subscriber
 * interface.
 */

/*
 * Usage examples: The Observer pattern is pretty common in TypeScript code, especially in the GUI components. It provides a way to react 
 * to events happening in other objects without coupling to their classes.
 * Identification: The pattern can be recognized by subscription methods, that store objects in a list and by calls to the update method 
 * issued to objects in that list.
 */


interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(subject: Subject): void;
}

class ConcreteSubject implements Subject {
  public state: number = 0;

  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    console.log('Subject: Attached an observer.');
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIdx = this.observers.indexOf(observer);
    if (observerIdx === -1) {
      return console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIdx, 1);
    console.log('Subject: Detached an observer');
  }

  public notify(): void {
    console.log('Subject: Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public someBusinessLogic(): void {
    console.log('\nSubject: I\'m doing something important.');
    this.state = Math.floor(Math.random() * (10 + 1));
    
    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }
}

class ConcreteObserver1 implements Observer {
  public update(subject: Subject): void {
    if(subject instanceof ConcreteSubject && subject.state < 3) {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}

class ConcreteObserver2 implements Observer {
  public update(subject: ConcreteSubject): void {
    if(subject instanceof ConcreteSubject && subject.state === 0 || subject.state >= 2) {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserver1();
subject.attach(observer1);

const observer2 = new ConcreteObserver2();
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);

subject.someBusinessLogic();