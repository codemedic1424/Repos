// // console.log("Hello, World! This is the beginning of something special!")

// // let name    = 'John';
// // let surname = 'Doe';

// // console.log(name);
// // console.log(surname);

// // let age = 11; 
// // console.log(age);

// // age = 54;

// // console.log(age);



// // const pi = 3.14;

// // console.log(pi);

// // console.log((3+2) - 76 * (1+1));

// // console.log(23+97);

// // console.log((4+6+9)/77);

// // let a = 10

// // console.log(a)

// // console.log(9*a);

// // let b = 7 * a;

// // console.log(b);


// // const max = 57;
// // let actual = max - 13;
// // let percentage = actual / max;

// console.log(percentage);

/* ---------> JS Array Method Examples <----------*/

let numbers = [1,2,3,4,5,6];

numbers.forEach((item) => {console.log(item)}); //prints each element into the console.

const three = numbers.map((item) => '3'); //prints each element as a three for the array.length.
const doubleItem = numbers.map((item) => item + item); //returns each element 'doubled' in the array.

const evens = numbers.filter((item) => item.type === Number); //places items that meet filter parameter in new array 'evens'.

const newArray = Array.concat (Value/Array); //merges arrays or values into a new array.

const newArray1 = array.find((item) => item.attribute  === 'parameter'); // creates a new array with items that meets the parameter. If no items satisfy parameter - return undefined.

const itemIndex = array.findIndex ((item) => item.attribute === 'parameter'); // returns new array with index of items that meet parameter. If index is negative - no items exist with parameter.

const itemIndex2 = array.indexOf(item, startIndex); //returns the index of first occurring item. if startIndex is blank, starts at 0. 
//const lastItemIndex = array.lastIndexof(item, Startindex); same as above, just begins at end of array.


