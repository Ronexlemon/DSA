import { dataNew } from "./data";


const ForEach = ()=>{
    dataNew.forEach((item)=>{
        console.log(item.make.country);
    })
    

}

(()=>{
    ForEach();
})()