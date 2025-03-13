import { Assign } from "./base";
import { Rectangle } from "./interface";

class RectangleCal extends Assign implements Rectangle{
    constructor(length?:number,width?:number,radius?:number){
        super(length,width,radius)
    }
    area(): number {
        if (this.length != undefined && this.width !=undefined){
            return this.length * this.width;
        }
        return 0;
    }
    perimeter(): number {
        return 0
    }
}


const rec:RectangleCal = new RectangleCal(20,30,40)
console.log("Rectange areas",rec.area())