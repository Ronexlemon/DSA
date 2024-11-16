import { dataNew } from "./data";


const Reduce =()=>{
    const totalPrice = dataNew.reduce((acc,cur)=>{
        return acc + cur.price

    },0)
    console.log("totalPrice",totalPrice)
    //return an array of all car models
    const carNamesArray = dataNew.reduce((acc,cur)=>{
        return acc.concat(cur.name);       

    },[] as string[])
    console.log("new array of names",carNamesArray)
}

const Reducee =()=>{
    const totalPrice = dataNew.reduce((acc,cur)=>{
        return acc + cur.price

    },0)
    console.log("totalPrice",totalPrice)
    //return an array of all car models
    const carNamesArray = dataNew.reduce((acc,cur)=>{
        return acc.concat(cur.name);       

    },[] as string[])
    console.log("new array of names",carNamesArray)
}

const Reduceer =()=>{
    const totalPrice = dataNew.reduce((acc,cur)=>{
        return acc + cur.price

    },0)
    console.log("totalPrice",totalPrice)
    //return an array of all car models
    const carNamesArray = dataNew.reduce((acc,cur)=>{
        return acc.concat(cur.name);       

    },[] as string[])
    console.log("new array of names",carNamesArray)
}
const Re =()=>{
    const totalPrice = dataNew.reduce((acc,cur)=>{
        return acc + cur.price

    },0)
    console.log("totalPrice",totalPrice)
    //return an array of all car models
    const carNamesArray = dataNew.reduce((acc,cur)=>{
        return acc.concat(cur.name);       

    },[] as string[])
    console.log("new array of names",carNamesArray)
}
(()=>{
    Reduce()
})()