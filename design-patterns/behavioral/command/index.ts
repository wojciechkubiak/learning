// Command
// Complexity: 1/3, Popularity: 3/3

/*
 * Command is behavioral design pattern that converts requests or simple operations into objects.
 * The conversion allows deferred or remote execution of commands, storing command history, etc.
 */

/*
 * Usage examples: The Command pattern is pretty common in TypeScript code. Most often it's used as an alternative for callbacks to
 * parameterizing UI elements with actions. It's also used for queueing tasks, tracking operations history etc.
 * Identification: The Command pattern is recognizable by behavioral methods in an abstract/interface type (sender) which invokes a
 * method in an implementation of a different abstract/interface type (receiver) which has been encapsulated by the command
 * implementation during its creation. Command classes are usually limited to specific actions.
 */

interface Command {
  execute(): void;
}

class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): void {
    console.log(
      `SimpleCommand: See, I can do simple things like printing (${this.payload})`
    );
  }
}

class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: Working on (${a}.)`);
  }

  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b}.)`);
  }
}

class ComplexCommand implements Command {
  private receiver: Receiver;
  private a: string;
  private b: string;

  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  public execute(): void {
    console.log(
      "ComplexCommand: Complex stuff should be done by a receiver object."
    );
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}

class Invoker {
  private onStart?: Command;
  private onFinish?: Command;


  public setOnStart(command: Command): void {
    this.onStart = command;
  }

  public setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  private isCommand(object: Command): object is Command {
    return object.execute !== undefined;
  }

  public doSomethingImportant(): void {
    console.log("Invoker: Does anybody want something done before I begin?");
    if (this.onStart && this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log("Invoker: ...doing something really important...");

    console.log("Invoker: Does anybody want something done after I finish?");
    if (this.onFinish && this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }
}

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Say Hi!'));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

invoker.doSomethingImportant();