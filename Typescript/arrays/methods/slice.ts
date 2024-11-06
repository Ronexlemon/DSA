import { dataNew } from "./data";


const Slice=()=>{
    const newArray = dataNew.slice(1,4)
    console.log("old data",dataNew)
    console.log("new data",newArray)
}
(()=>{
    Slice()

})()