const greet = (person:{name:string,salary:number})=>{
    return "Hello"+ person.name;

}


type Person={
    name:string;
    salary:number
}

const p:Person = {name:"Lemonr",salary:1000}

console.log(greet(p))