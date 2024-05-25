"use strict";
// Q41 :Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
var magicians = ["Ali Raza", " Bilal", "Hadi"];
var show_magicians = function (magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
};
exports.default = show_magicians;
magicians;
