
// Q37:-Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
import co from "co"
function Make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Size: ${size}, Message: ${message}`);
  }
  
  Make_shirt();
  Make_shirt("medium");
  Make_shirt("small", "I love JavaScript");