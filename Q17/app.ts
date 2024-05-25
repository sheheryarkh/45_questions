

// Q24:- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let carName : string = 'subaru';
let age: number = 25;
let numbers: number[] = [1, 2, 3, 4, 5];

// let string Tests

//   Test 1:  Equality  (True)
console.log("Is carName == 'subaru'? I predict True.");
console.log(carName == "subaru"); // Prediction: True (case-insensetive)

//   Test 2:  Strict equality  (False)
console.log("Is carName === 'Subaru'? I predict False.");
console.log(carName === "Subaru"); // Prediction: False (case-sensetive)

//   Test 3:  Inequality  (False)
console.log("Is carName != 'toyota'? I predict True.");
console.log(carName != "toyota"); // Prediction: True (case-insensetive)

//   Test 4:  Strict inequality  (True)
console.log("Is carName !== 'subaru'? I predict False.");
console.log(carName !== "subaru"); // Prediction: False (case-sensetive)

// (lowercase function test)

//   Test 5:  lowercase  conversion (True)
console.log("Is carName.toLowerCase() == 'subaru'? I predict True.");
console.log(carName.toLowerCase() == "subaru"); // Prediction: True (converts to lowercase)

//   Test 6:  lowercase  conversion (False) 
console.log("Is carName ===  car.toLowerCase()? I predict False.");
console.log(carName === carName.toLowerCase()); // Prediction: False (converts to lowercase)

// (Numerical Tests)

//   Test 7:  Equality  (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25); // Prediction: True

//   Test 8:  Inequality  (False)
console.log("Is age != 30? I predict False.");
console.log(age != 30); // Prediction: False

//   Test 9: Greater than  (False)
console.log("Is age > 30? I predict False.");
console.log(age > 30); // Prediction: False

//   Test 10: Less than  (True)
console.log("Is age < 30? I predict True.");
console.log(age < 30); // Prediction: True

// (Logical operators)

//   Test 11: AND (True)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30); // Prediction: True 

//   Test 12: OR (False)
console.log("Is age < 30 || age > 18? I predict False.");
console.log(age < 30 || age > 18); // Prediction: False

// (ARRAY test)

//   Test 13: IN array (True)
console.log("Is 3 in numbers? I predict True.");
console.log(3 in numbers); // Prediction: True

//   Test 14: NOT IN array (True    )
console.log("Is 6 in numbers? I predict false    .");
console.log(6 in numbers); // Prediction: false  

















