class Assign{
    public length?:number
    public width?:number
    public radius?:number
    readonly pie:number = 3.142

    constructor(length?:number,width?:number,radius?:number){
        this.length = length
        this.width = width
        this.radius = radius

    }
}

class ExtraProperties{
    public color?:string
    public material?:string

    constructor(color?:string,material?:string){
       
            this.color = color
        
        
            this.material = material
              
        
    }
}

export {Assign,ExtraProperties}