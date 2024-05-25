
// Date: 2/24/2024

// Q26:-Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien

// version 1

import co from "co"
let alien_Color: string = "green";

if (alien_Color === "green") {
  console.log("player just earned 5 points");
} else if (alien_Color === "yellow") {
  console.log("player just earned 10 points");
} else if (alien_Color === "red") {
  console.log("player just earned 15 points");
}else{
  console.log("Please enter a valid color");
}

// version 2
alien_Color = "red";

if (alien_Color === "green") {
  console.log("player just earned 5 points");
} else if (alien_Color === "yellow") {
  console.log("player just earned 10 points");
} else if (alien_Color === "red") {
  console.log("player just earned 15 points");
}else{
  console.log("Please enter a valid color");
}

// version 3
alien_Color = "yellow";

if (alien_Color === "green") {
  console.log("player just earned 5 points");
} else if (alien_Color === "yellow") {
  console.log("player just earned 10 points");
} else if (alien_Color === "red") {
  console.log("player just earned 15 points");
}else{
  console.log("Please enter a valid color");
}
