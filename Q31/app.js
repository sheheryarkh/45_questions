// Q38 :Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
var describeCity = function (city, country) {
    return "".concat(city, " is in ").concat(country, ".");
};
var city1 = describeCity("Karachi", "Pakistan");
var city2 = describeCity("Delhi", "India");
var city3 = describeCity("Kabul", "Afghanistan");
console.log(city1);
console.log(city2);
console.log(city3);
