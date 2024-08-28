import { objs } from "./reduce";


const cusdArrays = objs.filter((cusdItems)=>  cusdItems.Token === "cusd")
const celoTokenArray = ()=>{
    const celoArray = objs.filter((token)=>token.Token === "Celo")
    return celoArray
}

console.log(cusdArrays)
console.log("Celo Token Array",celoTokenArray())
