type Person={
    name:string;
    salary:number
}

const greet = (person:{name:string,salary:number})=>{
    return "Hello"+ person.name;

}

//or by using an interface /Type
const greet2 =(person:Person)=>{
    return "Hello"+ person.name;
}

//or passing the type
const greet3 = ({name,salary}:Person)=>{
    return "Hello "+ name;

}

//optional properties

interface Shape{
    color:string;
}
interface PaintOptions{
    shape:Shape;
    xPos?:number;
    yPos?:number;
}

const paintShape =(opts:PaintOptions)=>{
    //mix
    let c = opts.shape.color;
    let x = opts.xPos;
    let y = opts.yPos;
    if(x && y && c){
        console.log("Painting at position x,y with color c");
    }else if(x && c){
        console.log("Painting at position x with color c");
    }else if(y && c){
        console.log("Painting at position y with color c");
    }else{
        console.log("Painting with color c");
    }



}


const p:Person = {name:"Lemonr",salary:1000}
const paint:PaintOptions = {shape:{color:"Greeen"},xPos:100,yPos:300}
const paint2:PaintOptions = {shape:{color:"Greeen"},xPos:100}
const paint3:PaintOptions = {shape:{color:"Greeen"}}


console.log(greet(p))
console.log(greet2(p))
console.log(greet3(p))
paintShape(paint) //optional properties
paintShape(paint2)
paintShape(paint3) //optional properties