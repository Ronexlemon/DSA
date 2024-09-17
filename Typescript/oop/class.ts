class Point{
    //readOnly fields
    readonly konstant:number = 3000;
    pointx:number |undefined;
    pointy:number;
    pointz!:number
    constructor(y:number,x?:number){
        this.pointx = x;
        this.pointy =y;
        if(x !=undefined){
            this.pointz = x*y+this.konstant
        }
       

    }
}

class Getters_Setters{
    _length:number=10

    get length():number{
        return this._length;
    }
    set length(newNumber:number){
        this._length = newNumber
    }

}

//class heritage

interface Pingable{
    ping():string
}
interface Checkable{
    check(name:string):boolean
}
class Ping_it implements Pingable {
    ping():string{
        return "pinging ..."
    }

}
class CheckOut implements Checkable{
    check(s:any){
        return  s.toLowerCase() === "ok";

    }
}

//inheritance
class Person{
    talk(){
        console.log("Hello i can talk")
    }
}
class John extends Person{
    name(){
        console.log("Hello my name is John")
    }
}

//overriding
class Mary extends John{
    talk(newMessage?:string){
        if(newMessage === undefined){
            super.talk()
        }else{
            console.log(newMessage)
        }
      

    }
}
//oder of initialization
class Base {
    name = "base";
    constructor() {
      console.log("My name is " + this.name);
    }
  }
   
  class Derived extends Base {
    name = "derived";
  }

  //new
class newError extends Error{
    constructor(message?:string){
        super(message);
        
        }
        sayHello(){
            console.log("Hello",this.message)
        }
}

//visibility
class NewVisibility{
    greet(){
        console.log("Hello")
    }
    protected getName(){
        console.log("My name is NewVisibility")
    }
}
class NewVisibility2 extends NewVisibility{
    getName(): void {
        super.getName();
    }}

 // static
 class WeStatic{
    static x:number = 10

    static PrintX(){
        console.log(WeStatic.x)
    }

 }   

 // Generic classes

 class Box<Type>{
    contents:Type

    constructor(value:Type){
        this.contents = value;
    }
 }

const p = new Point(10,20)






console.log(p)
console.log("getters and setters .......")
const gs = new Getters_Setters()
gs._length = 100
gs.length =20

console.log(gs.length)

console.log("implements.......")
const pn = new Ping_it()
const ch = new CheckOut()

console.log("Yes have checkit",ch.check("helloYOWWW"))
console.log(pn.ping())  //output: pinging ...
//inheritance
const per = new John()
per.name()
per.talk()
//overriding
const mar = new Mary()
mar.talk()
mar.talk("Yes i can talk tooo")

//oder of initialization
console.log("oder of initialization")

const d = new Derived()
console.log(d)
console.log("new keyword")
const e = new newError("Yes its a new error")
e.sayHello()
//visibility
console.log("visibility")
const nv = new NewVisibility()
nv.greet()
const nv2 = new NewVisibility2()
nv2.getName()
//static classes
console.log("static classes ...................")

WeStatic.PrintX()
console.log(WeStatic.x)
//Generic classes
console.log("Generic classes ...................")
const g = new Box<string>("Hello")
const gg = new Box<number>(45)
console.log(g.contents)
console.log(gg.contents)
