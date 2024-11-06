import { dataNew } from "./data";


const Splice =()=>{
    const newdata = {
        "name": "Volkswagen",
        "make": { "year": 2023, "model": "Tiguan", "country": "Germany" },
        "price": 39000,
        "color": "Green"
    };
    const data = dataNew.splice(1,1,newdata)
    console.log(dataNew)
}

(()=>{
    Splice()

})()