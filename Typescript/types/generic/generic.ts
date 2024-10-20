const identity = <Type>(arg:Type):Type=>{
    return arg;
}

const lengthTypes = <Type>(arg:Type[]):Type[]=>{
    console.log("the length of array is",arg.length)
    return arg;
}

( () => {
    const result =  identity<number>(123);
    console.log(result);
    const stringResult = identity<string>("Lemonr")
    console.log(stringResult);
    const arrayResult = lengthTypes<number>([1,2,3,4,5])
    console.log(arrayResult);
    
})();