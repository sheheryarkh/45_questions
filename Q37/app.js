
// Q43 :Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../Q35/app");
var magicians = ["Hadi", "Bilal", "Ali Raza"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log("Great " + magicians[i]);
    }
}
var newArray = magicians.slice();
// show_magicians(magicians);
(0, app_1.default)(magicians);
// great added array to each name;
make_great(magicians);
exports.default = magicians;
{
    make_great;
}
app_1.default;
console.log(magicians);
