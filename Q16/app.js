// Name: Ali Raza
// Date: 2/24/2024
// Q23:- Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = "subaru";
/// Test 1:  Equality comparison (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru"); // Prediction: True
// Test 2:  Strict equality comparison (True)
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === "Subaru"); // Prediction: False
// Test 3:  Inequality comparison (False)
console.log("Is car != 'toyota'? I predict True.");
console.log(car != "toyota"); // Prediction: False
// Test 4:  Strict inequality comparison (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== "subaru"); // Prediction: False
// Test 5:  less than comparison (False)
console.log("Is car < 'honda'? I predict False.");
console.log(car < "honda"); // Prediction: False (lexicographic comparison)
// Test 6:  greater than comparison (False)
console.log("Is car > 'subaru'? I predict False.");
console.log(car > "subaru"); // Prediction: False (lexicographic comparison)
// Test 7:  less than or equal to comparison (True)
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= "subaru"); // Prediction: True
// Test 8:  greater than or equal to comparison (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= "subaru"); // Prediction: True
// Test 9: checking truthiness
console.log("Is car? I predict True.");
console.log(car); // Prediction: True  (Non-empty string is truthy) 
// Test 10: Is car length less than 3? I predict False.
console.log("Is car.length < 3? I predict ".concat(car.length < 3, "."));
