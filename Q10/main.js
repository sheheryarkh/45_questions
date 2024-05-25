//Q18:-  Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var locations = ["Rio", "miami", "birmingham", "peru", "seoul"];
// • Print your array in its original order.
console.log("Original order:", locations);
// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", locations.slice().sort());
// • Show that your array is still in its original order by printing it.
console.log("Original order:", locations);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", __spreadArray([], locations, true).sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("Original order:", locations);
// • Reverse the order of your list. Print the array to show that its order has changed.
locations.reverse();
console.log("Reversed order:", locations);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
locations.reverse();
console.log("Original order restored:", locations);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
locations.sort();
console.log("Alphabetical order stored:", locations);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
locations.sort().reverse();
console.log("Reverse alphabetical order stored:", locations);
