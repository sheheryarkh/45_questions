
// Q38 :Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
import co from "co"
const describeCity = (city: string, country: string) => {
    return `${city} is in ${country}.`;
  };
  
  let city1 = describeCity("Karachi", "Pakistan");
  let city2 = describeCity("Delhi", "India");
  let city3 = describeCity("Kabul", "Afghanistan");
  console.log(city1);
  console.log(city2);
  console.log(city3);
