
const newArr = new Array([{"name":"rone"}])
const ArrayNew = ["Banana","Golang","SQL","DATABASE"]
const ArrayNew2 = ["Orange","MongoDb","Prisma","Typescript"]
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


console.log(newArr)
console.log(itemAtIndex0)
console.log(anotherArray)
console.log(finalArray)


