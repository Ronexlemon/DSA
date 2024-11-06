import { dataNew } from "./data";



const Pop =()=>{
    //remove  the last element
    //length before pop
    const len = dataNew.length;
    console.log("the length before pop",len)
    console.log("Items before pop",dataNew)

    console.log("......................................................")

    const popelement= dataNew.pop()
    console.log("The length after pop",dataNew.length)
    console.log(" pop element",popelement)
    console.log("Items after pop",dataNew)
}

(()=>{
    Pop()
})()