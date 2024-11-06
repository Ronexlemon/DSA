import { dataNew } from "./data";


const Push =()=>{

    const newdata={
        "name": "Volkswagen",
        "make": {
            "year": 2023,
            "model": "Tiguan",
            "country": "Germany"
        },
        "price": 39000,
        "color": "Green"
    }
    const newArray = dataNew.push(newdata)
    console.log("new length",newArray,dataNew)

}

(async()=>{
     Push()

})()