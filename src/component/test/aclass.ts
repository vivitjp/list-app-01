type Type = { name: string }
type OtherType = { name: number }
type CommonT = { name: boolean }

class Parent {
  vals: Type
  constructor(vals: Type) { this.vals = vals }
}
interface Child {
  staticProperty: Type
}
interface OtherChild { }
declare function calcStaticProp(): { name: string }

interface ReturnType {
  val: number
}

class Child extends Parent implements Child, OtherChild {
  property: Type;
  defaultProperty = 'default value';
  private _privateProperty: Type;
  private readonly _privateReadonlyProperty: Type;

  static staticProperty: Type;
  static defaultValue: Type;

  static {
    try {
      Child.staticProperty = calcStaticProp();
    } catch {
      Child.staticProperty = this.defaultValue;
    }
  }

  constructor(arg1: Type) {
    super(arg1);
    this.property = { name: 'John' }
    this._privateProperty = { name: 'Smith' }
    this._privateReadonlyProperty = { name: 'Steve' }
    this.methodProperty = (arg1: Type) => ({ val: 1 });
    this.overloadedMethod = (arg1: Type) => ({ val: 1 });
  }

  private _privateMethod(): void { }

  methodProperty: (arg1: Type) => ReturnType;

  overloadedMethod(arg1: Type): ReturnType;
  overloadedMethod(arg1: OtherType): ReturnType;
  overloadedMethod(arg1: CommonT): CommonReturnT { }

  static staticMethod(): ReturnType { }
  subclassedMethod(arg1: Type): ReturnType {
    super.subclassedMethod(arg1);
  }
}

export { Child }