interface LengthWise{
    length: number
}

const identityLogging = <Type extends LengthWise>(arg:Type):Type=>{
    console.log(arg.length);
    return arg;
}


(()=>{
    const arg = identityLogging<string>("hello")
    console.log(arg);

})()