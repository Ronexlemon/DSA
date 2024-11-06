import { dataNew } from "./data";

const Concat =()=>{
    const dataDouble = dataNew.concat(...dataNew)
    console.log("new combine data",dataDouble.length)
}
(()=>{
    Concat()
})()