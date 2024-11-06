import { dataNew } from "./data";
const filterByYear=(year:number)=>{
    return year == 2023

}

const Filter = ()=>{
    const newdata = dataNew.filter((value)=>filterByYear(value.make.year))
    const newdata2 =  dataNew.filter((value)=> value.color === "Gray" )
    console.log("newData Object",newdata)
    console.log("new data 2",newdata2)
}
(()=>{
    Filter()
})()