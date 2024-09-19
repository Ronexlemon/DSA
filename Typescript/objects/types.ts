

interface tokenDetails {
    tokenName: string;
    tokenSymbol: string;
    tokenDecimals: number;
    tokenAddress: string;
  }
  
  interface tokens {
    [token: string]: tokenDetails;
  }
  
  interface tokenS {
    [token: string]: tokens[];
  }
const objectsTokens: tokenS[] =[{
    "CUSD":[{
        "ckes":{
            "tokenName":"ckes",
            "tokenSymbol":"CKES",
            "tokenDecimals":18,
            "tokenAddress":"0x000000000000000000000000000000000000000"

        },
        "celo":{
            "tokenName":"celo",
            "tokenSymbol":"CELO",
            "tokenDecimals":18,
            "tokenAddress":"0x000000000000000000000000000000000000001"
            
        },
        "usdt":{
            "tokenName":"uSDT",
            "tokenSymbol":"usdt",
            "tokenDecimals":6,
            "tokenAddress":"0x000000000000000000000000000000000000002"
            
        }

    }],
    "CELO":[{
        "ckes":{
            "tokenName":"ckes",
            "tokenSymbol":"CKES",
            "tokenDecimals":18,
            "tokenAddress":"0x000000000000000000000000000000000000000"

        },
        "cusd":{
            "tokenName":"celo",
            "tokenSymbol":"CELO",
            "tokenDecimals":18,
            "tokenAddress":"0x000000000000000000000000000000000000001"
            
        },
        "usdt":{
            "tokenName":"uSDT",
            "tokenSymbol":"usdt",
            "tokenDecimals":6,
            "tokenAddress":"0x000000000000000000000000000000000000002"
            
        }

    }]
}]

//filter object by token to get its tokens
const returnSupportedTokens= (tokenSymbo:string)=>{
    const filteredTokens = objectsTokens.flatMap((tokengroup)=> tokengroup[tokenSymbo]?tokengroup[tokenSymbo]:[] )
    const result = filteredTokens.flatMap((tokenGroup) =>
        Object.values(tokenGroup)
      );
    
      return result;

} 

console.log(returnSupportedTokens("CUSD"))


type Person={
    name:string;
    salary:number
}

const greet = (person:{name:string,salary:number})=>{
    return "Hello"+ person.name;

}

//or by using an interface /Type
const greet2 =(person:Person)=>{
    return "Hello"+ person.name;
}

//or passing the type
const greet3 = ({name,salary}:Person)=>{
    return "Hello "+ name;

}

//optional properties

interface Shape{
    color:string;
}
interface PaintOptions{
    shape:Shape;
    xPos?:number;
    yPos?:number;
}

const paintShape =(opts:PaintOptions)=>{
    //mix
    let c = opts.shape.color;
    let x = opts.xPos;
    let y = opts.yPos;
    if(x && y && c){
        console.log("Painting at position x,y with color c");
    }else if(x && c){
        console.log("Painting at position x with color c");
    }else if(y && c){
        console.log("Painting at position y with color c");
    }else{
        console.log("Painting with color c");
    }



}

//index  signatures
interface StringArray {
    [index: number]: string;
    
    }



const p:Person = {name:"Lemonr",salary:1000}
const paint:PaintOptions = {shape:{color:"Greeen"},xPos:100,yPos:300}
const paint2:PaintOptions = {shape:{color:"Greeen"},xPos:100}
const paint3:PaintOptions = {shape:{color:"Greeen"}}

//index signature

const sig:StringArray = {2:"lemonr",3:"yesbannah"}



console.log(greet(p))
console.log(greet2(p))
console.log(greet3(p))
paintShape(paint) //optional properties
paintShape(paint2)
paintShape(paint3) //optional properties

//index signature
console.log(sig[2])