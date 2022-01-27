type Type = { name: string }

class Parent {
  vals: Type
  constructor(vals: Type) { this.vals = vals }
}
interface Child {
  staticProperty: Type
}
interface OtherChild { }

interface ReturnType {
  val: number
}

class Child extends Parent implements Child, OtherChild {
  property: Type;                 //public
  defaultProperty = 'defvalue';   //public
  private _privateProp: Number;
  private readonly _privateReadonlyProp: Number;

  constructor(arg1: Type) {
    super(arg1);
    this.property = { name: 'John' }
    this._privateProp = 7
    this._privateReadonlyProp = 9
    this.methodProperty = (arg1: Type) => ({ val: 1 });
  }

  private _privateMethod(): void { }

  methodProperty: (arg1: Type) => ReturnType; //Public Method
}

const child = new Child({ name: 'Karen' })
child.methodProperty({ name: 'Beth' })

export { Child }
