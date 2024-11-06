import { dataNew } from "./data";


const Sort =()=>{
    console.log("price sort before",dataNew)
    const newarr = dataNew.sort((a,b)=>{
        return b.price - a.price
    })
    //sort by name
    const sortbyName = dataNew.sort((a,b)=>{
        return a.name.localeCompare(b.name)
    })
    console.log("price sort after",newarr)
    console.log("sort by name",sortbyName)
}

(()=>{
    Sort()
})()