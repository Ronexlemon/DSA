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
const p = new Point(10,20)



console.log(p)
console.log("getters and setters .......")
const gs = new Getters_Setters()
gs._length = 100
gs.length =20

console.log(gs.length)