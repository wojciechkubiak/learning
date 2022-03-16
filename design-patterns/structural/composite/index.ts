// Bridge
// Complexity: 2/3, Popularity: 2/3

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

abstract class Component {
  protected parent?: Component | null;

  public setParent(parent?: Component) {
    this.parent = parent || null;
  }

  public getParent(): Component | null {
    return this.parent || null;
  }

  public add(component: Component): void {}

  public remove(component: Component): void {}

  public isComposite(): boolean {
    return false;
  }

  public abstract operation(): string;
}

class Leaf extends Component {
  public operation(): string {
    return "Leaf";
  }
}

class Composite extends Component {
  protected children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component): void {
    const componentIdx = this.children.indexOf(component);
    this.children.splice(componentIdx, 1);

    component.setParent();
  }

  public isComposite(): boolean {
    return true;
  }

  public operation(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.operation());
    }

    return `Branch(${results.join("+")})`;
  }
}

const tree = new Composite();

const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());

const branch2 = new Composite();
branch2.add(new Leaf());

tree.add(branch1);
tree.add(branch2);
console.log('Client: Now I\'ve got a composite tree:');

console.log(`RESULT: ${tree.operation()}`);
