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

const p = new Point(10,20)



console.log(p)