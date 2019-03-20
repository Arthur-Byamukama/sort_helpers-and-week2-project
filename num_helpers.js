var countOdd = 0;
var countEven = 0;
var countPrime = 0;
var countFizz = 0;
var countBuzz = 0;
var countFizzbuzz = 0;


const main = (y) => {
for (c=0; c<y+1; c++) {
  var types = [];


  if (odd(c)==true) {
    types.push("odd");
    countOdd++
    //countForOdd++;

  } else {
    types.push("even");
    countEven++
  }
  if (prime(c)==true) {
    types.push("prime");
    countPrime++
  }

  if (fizz(c)==true){
    types.push("fizz");
    countFizz++
  }
  if (fizzbuzz(c)==true){
    types.push("fizzBuzz")
    countFizzbuzz++
  }
  if (buzz(c)==true){
    types.push("buzz");
    countBuzz++
  }
  console.log(c, types);
}
console.log(countPrime + " number of primes ", countOdd + " number of odds " + countEven + " number of evens ", countBuzz + " number of buzz ", countFizz + " number of fizz ", countFizzbuzz + " number of fizzBuzz ");
}

var odd = (n) => {
if (n%2 == 0) {
  return false
} else{
  return true
}
}

var prime = (n) => {
   for (var x = 2; x < n; x++) {
     // console.log(x);
     if (n%x==0) {
       return false;
       }
  }
  if (n>1){
    return true;
}};
var fizz=(n)=>{
 if(n%3==0 && n%5!=0){
   return true
 }
}

var buzz=(n)=>{
 if(n%5==0 && n%3!=0){
   return true
 }
}

var fizzbuzz=(n)=>{
 if(n%5==0 && n%3==0&& n!==0){
   return true
 }
}







main(100);
