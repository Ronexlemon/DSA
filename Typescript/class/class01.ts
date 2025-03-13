import { Assign, ExtraProperties } from "./base"

class Figures{
    private extraproperties:ExtraProperties
    private assign: Assign

    constructor(length?:number,width?:number,radius?:number,color?:string,material?:string){
        this.assign = new Assign(length,width,radius)
        this.extraproperties = new ExtraProperties(color,material)
        
        
        

    }

    rectangeleArea=():number=>{
        if (this.assign.length !=undefined && this.assign.width !=undefined){
            return this.assign.length * this.assign.width
        }
        
         return 0;
       
    }
    circleArea=():number=>{
        if (this.assign.radius != undefined){
            return this.assign.pie * (this.assign.radius ** 2)
            }
            return 0}
    getColor=():string=>{
        if (this.extraproperties.color !=undefined){
            return this.extraproperties.color
        }
        return "Not Found"
    }
    
}


const classInherit:Figures = new Figures(10,20,5,"Green","Wood")
console.log("rectangle",classInherit.rectangeleArea())
console.log("color",classInherit.getColor())