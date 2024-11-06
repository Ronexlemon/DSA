import { dataNew } from "./data";


const Unshift=()=>{
    const newdata = {
        "name": "Volkswagen",
        "make": {
            "year": 2023,
            "model": "Tiguan",
            "country": "Germany"
        },
        "price": 39000,
        "color": "Green"
    };
    const unsfiftLength = dataNew.unshift(newdata)
    console.log(dataNew);
    
}


(()=>{
     Unshift();

})()