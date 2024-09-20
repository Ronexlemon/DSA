
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

