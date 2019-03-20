


const shuffle = require("./shuffler.js");
var prime=[];
let number = (n) =>
{
 for (var num = 2; num <= n; num++) {

   var a = false;
   for (var i = 2; i <= num; i++) {
       if (num%i===0 && i!==num) {
           a = true;
       }
   }
   if (a === false) {
    prime.push(num);

 }

}
console.log(prime);

var b=shuffle(prime);
return b;


 }
var shuffled = number (100)
console.log("this is the shuffled array" + shuffled);


var arrayToAscending = (inputArray)=>{
var organisedArray = []
var arrayShuffled = inputArray
for (var j=0; Math.max(...arrayShuffled) > Math.max(...organisedArray); j++){
  var current_lowest = Math.min(...inputArray);
  var lowest_index = arrayShuffled.indexOf(current_lowest);
  organisedArray.push(current_lowest);
  arrayShuffled.splice(lowest_index,1);
 }
  return (organisedArray)
}
var organised = arrayToAscending(shuffled)
console.log("this is the organised Array" + organised);
