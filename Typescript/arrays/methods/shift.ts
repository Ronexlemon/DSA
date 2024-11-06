import { dataNew } from "./data";

const Shift =()=>{ //remove an element at the begining of an array
    const shiftItem = dataNew.shift()
    console.log(shiftItem)


}

(()=>{
    Shift()

})()