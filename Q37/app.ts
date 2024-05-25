
// Q43 :Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

import show_magicians from "../Q35/app";

let magicians: string[] = ["Hadi", "Bilal", "Ali Raza"];

function  make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
     console.log("Great " + magicians[i]);
  }
}


const newArray: string[] = magicians.slice()
// show_magicians(magicians);
show_magicians(magicians)

// great added array to each name;
make_great(magicians);


export default magicians
 {make_great}
 show_magicians


//original array unchanged;

console.log(magicians);

















