import { dataNew } from "./data";



const Pop =()=>{
    //remove  the last element
    //length before pop
    const len = dataNew.length;
    console.log("the length before pop",len)
    console.log("Items before pop",dataNew)

    console.log("......................................................")

    const poplength = dataNew.pop()
    console.log("The length after pop",dataNew.length)
    console.log("Items after pop",dataNew)
}

(()=>{
    Pop()
})()