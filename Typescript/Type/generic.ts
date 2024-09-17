//specific data type
const identity=(arg:number):number=>{
    return arg

}

//generic
const  Identity = <Type>(arg: Type): Type=> {
    return arg;
  }
  let myid: {<Type>(arg: Type): Type} = Identity
  console.log(myid(4))

  console.log(Identity(20))

  //generic types (interfaces)

  interface GenericTypeFn{
    <Type>(arg:Type):Type
  }
  interface GenericIdentity<Type>{
    (arg:Type):Type
  }
  interface LengthWise{
    length: number
  }
  let myGeneric: GenericTypeFn = Identity
  let myGeneric2: GenericIdentity<number> = Identity
  let myGeneric3: GenericIdentity<string> = Identity
  console.log(myGeneric3("hello"))
  console.log(myGeneric2(40))
  console.log(myGeneric(10))

  //generic classes
  console.log("Generic classes ............................")
  class GenericClass<Type>{
    value:Type
    constructor(value:Type){
        this.value=value
        }
        getValue():Type{
            return this.value
            }
  }

  const gc = new GenericClass<number>(45)
  console.log(gc.getValue())
  //Generic contraints
  console.log("Generic contraints ............................")
  const LoggingIdentity = <Type extends LengthWise>(arg:Type):Type=>{
    console.log(arg.length)
    return arg
  }
  console.log(LoggingIdentity("hello"))