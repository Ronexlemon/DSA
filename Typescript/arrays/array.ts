
const newArr = new Array([{"name":"rone"}])
const ArrayNew = ["Banana","Golang","SQL","DATABASE"]
const ArrayNew2 = ["Orange","MongoDb","Prisma","Typescript"]
const ArrayAges = [12,45,67,8,2,34,18,35,43]
import { objectsTokens } from "../objects/types"

//Array methods and properties

/**
 * at() -> returns an indexed element of an array
 * concat() joins arrays and returns an array wih joined arrays
 * constructor() returns the function that created the array prototype
 */

//at()

//get elemens at index 0

const itemAtIndex0 = objectsTokens.flatMap((items)=> items["CUSD"])


//concat()
/**
 * Concatenates (joins) two or more arrays
 * returns a new array, containing the joined arrays
 *  does not change the original arrays
 */
const anotherArray = ArrayNew.concat(ArrayNew2)
const finalArray = anotherArray.concat(anotherArray)

//copyWithin
/**
 * copies array elements to another position in an array
 * overwrites the existing values
 * does not add items to the array
 */
//copy to index 2, all elements from index 0
let cpy = ArrayNew.copyWithin(2,0)

//copy to index 2 allelements from index 0,2
let cpy2 = ArrayNew.copyWithin(2,0,3) 

//entries()
/**
 * returns an Iterator object with key/value pairs from an array
 */
const ent = ArrayNew.entries()
const allent =()=>{
    for (const [index, element] of ent) {
        console.log(index,element)
    }
}
//Every()
/**
 * executes a function for each array element
 * returns true if the function returns true for all the elements
 *  returns false if the function returns false for any element
 * does not execute the function for empty elements
 * does not change the original array
 * 
*/
//with an external function
const checkAge =(age:number)=>{
    return age>=0
}
const legalAge = ArrayAges.every(checkAge) // are all ages above 0

//with an arrow
const legalAge2 = ArrayAges.every((age)=> age >=1)

//Fill()
/**
 *  specified elements in an array with a value
 *   overwrite the original array
 * NB -> start and end position can be specified, if not, all elements will be filled
*/
const fill = ArrayNew.fill("Yollow") // fill the whole array with the value
const fill2 = ArrayNew.fill("Yes have it",2,4)

//filter
/***
 * creates a new array filled with elements that pass a test provided by a function
 * does not execute the function for empty elements
 * does not change the original array
 */
const above18 = ArrayAges.filter((value)=> value >=18)
const above1_2 = ArrayAges.filter(checkAge)
const allcusd = objectsTokens.flatMap((value)=> Object.values(value["CUSD"]).flatMap((value2)=> value2["ckes"]).filter((value3)=> value3.tokenAddress))

//find

/**
 * returns the value of the first element thats passes a test
 * executes a function for each array element
 * returns undefined if no elements found
 * does not execute the function for empty elements
 * does not change the original array
 */
//find the value of the first element with a value over 18
const find = ArrayAges.find((value)=> value >=18)

//FindIndex()
/**
 * Executes a function for each array element
 *  returns the index of the first element that passes a test
 * returns -1 if no match is found
 * does not execute the function for empty elements
 *  does not change the original array
 */
const findeIndex = ArrayAges.findIndex((value)=> value ==18)
const findeIndex2 = ArrayAges.findIndex(checkAge)
const findeIndex3 = ArrayAges.findIndex((value)=> value >18)

//Flat
/**
 * 
*/

const flat = objectsTokens.flatMap((value)=> value["CUSD"].flat() )
const flat2 = objectsTokens.flat()
//Create a new array with the sub-array concatinated
const flatArray = [[1,2],[3,4],[6,6]]
const flatArray2 = [{"Token1":[{
    "token11":{
        "tokenAddress":"0x1234567890",
        "tokenName":"Token1",
        "tokenSymbol":"TK1",
        "tokenDecimals":18,
    },
    "token12":{
        "tokenAddress":"0x1234567890",
        "tokenName":"Token12",
        "tokenSymbol":"TK12",
        "tokenDecimals":18,
    },
}
]},
{"Token2":[{
    "token21":{
        "tokenAddress":"0x1234567890",
        "tokenName":"Token21",
        "tokenSymbol":"TK21",
        "tokenDecimals":18,
    },
    "token22":{
        "tokenAddress":"0x1234567890",
        "tokenName":"Token22",
        "tokenSymbol":"TK22",
        "tokenDecimals":18,
    },
}
]}]
const flatArr = flatArray.flat(2)
const flatArr2 = flatArray2.flat()

//flatmap()
/****
 * maps all array elements and creates a new flat array
 * creates a new array from calling a function for every array element
 * does not execute the function for empty elements
 * does not change the original array
 */

const flatmap = flatArray.flatMap((elements)=>elements.filter((value)=> value >2))
const flatmap2 = flatArray2.flatMap((elements)=> elements["Token1"])[0]?.token11
const flatmap3 = flatArray2.flatMap((elements)=> elements["Token1"])[0]?.token11
//foreach
const foreach1 = flatArray.flat().map((element,index)=> element *10)

//Array.from()
/***
 *  The Array.from() returns an array from any  object with a length property
 * returns an array from any iterable object
 */

const fromArray = ["John","Kim","Yollow","Best"]
const fromString = "ABCDEFGHIJ"
const arr = Array.from(fromArray,((item,index)=> item + "Alfapha"))
const arrString = Array.from(fromString)

//Includes
/****
 * includes returns true if an array contains a specific value
 *  returns false if an array does not contain a specific value
 * its case sensitive
 */


const includeArr = ["Golang","TypeScript","Javascript","Rust"]
const doesContain = includeArr.includes("Golang")
const doesContain2 = includeArr.includes("Python")

const doesContainAtAnIndex = includeArr.includes("Javascript",2)

//indexOf
/***
 * returns the first index (position) of a specified value
 * returns -1 if the value is not found
 */
const indexOfArr = [ "Solidity","Move","Near"]
const indexOf = indexOfArr.indexOf("Solidity")
const indexOf2 = indexOfArr.indexOf("Sol")
const indexOf3 = indexOfArr.indexOf("Solidity",0)


console.log(newArr)
console.log(itemAtIndex0)
console.log(anotherArray)
console.log(finalArray)
console.log("copy within",cpy)
console.log("copy within 2",cpy2)
console.log("entries",allent())

console.log("every",legalAge)
console.log("every2",legalAge2)
console.log("fill",fill)
console.log("fill2",fill2)
console.log("filter",above18)
console.log("filter2",above1_2)
console.log("filter3",allcusd)
console.log("find",find)
console.log("findIndex",findeIndex)
console.log("findIndex2",findeIndex2)
console.log("findIndex3",findeIndex3)
console.log("flat",flat)  //returns a new array
console.log("flat2",flat2[0])  //returns a new array
console.log("The flat array",flatArr)
console.log("The flat array 2",flatArr2)
console.log("The flatMAp array 2",flatmap)
console.log("The flatMAp array 2",flatmap2)
console.log("The foreach array ",foreach1)
console.log("The from array",arr)
console.log("The from string array",arrString)  //returns an array from any iterable object

console.log("The includes array",doesContain)
console.log("The includes array 2",doesContain2)  //returns true if the array
console.log("The includes array 3",doesContainAtAnIndex)  //returns true if
console.log("The index of array",indexOf)
console.log("The index of array 2",indexOf2)
console.log("The index of array 3",indexOf3)





