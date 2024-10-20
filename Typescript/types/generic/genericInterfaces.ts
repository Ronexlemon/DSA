const identity2 =<Type>(arg:Type):Type=>{
    return arg;
}

let iden: {<Type>(arg:Type):Type} = identity2
let iden2 : <Type>(arg:Type) => Type = identity2

interface GenericInterface{
    <Type>(arg:Type):Type
}
interface GenericInterface2<Type>{
    (arg:Type):Type
}
let genericInterface:GenericInterface = identity2
let genericInterface2:GenericInterface2<number> = identity2

const identity3 = (arg:GenericInterface):GenericInterface =>{
    return arg;
}

const identity4 = <Type>(arg:GenericInterface2<Type>):GenericInterface2<Type>=>{
    return arg;
}