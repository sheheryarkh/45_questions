//sheheryar khan
// Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// storing Names in array
var names = ["sheheryar", "shahid", "obaid", "astam", "johnny"];
// printing names one by one
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var item = names_1[_i];
    console.log(item);
}
