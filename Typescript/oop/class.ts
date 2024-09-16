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