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
  let myGeneric: GenericTypeFn = Identity
  let myGeneric2: GenericIdentity<number> = Identity
  let myGeneric3: GenericIdentity<string> = Identity
  console.log(myGeneric3("hello"))
  console.log(myGeneric2(40))
  console.log(myGeneric(10))