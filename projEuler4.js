//find largest palindromic product of two 3-digit factors
var factor1 = [];
var products = [];
var palindromes = [];
var digits = "";
var reversed = "";
//make 2 identical arrays of int 100-999
for (var a=100; a<1000; a++) {
	factor1.push(a);
} 
var factor2 = factor1; 
//multiply time!
//loop through each int in factor 1
for (var b=0; b < factor1.length; b++) {
	for (var c=0; c < factor2.length; c++) {
		products.push((factor1[b])*(factor2[c]));
	}
} 
//loop through array of all products, then find and add palindromes to array
for (var d=0; d < products.length; d++){
	digits = products[d].toString();
  //console.log(digits);
  //store in 2nd var to modify
	reversed = digits;
  //console.log(reversed + "test2");
	var revArray = reversed.split("");
  //console.log(revArray + "test3");
	var reversed = revArray.reverse();
  //console.log(revArray + "test4");
	var strAgain = reversed.join();
  //console.log(strAgain);
  var noCommaStr = strAgain.replace(/,/g, '');
  //console.log(noCommaStr);
    if (digits === noCommaStr) {
		palindromes.push(digits);
	}
 }
 //find largest value in array
function getMaxOfArray(numArray) {
     console.log(Math.max.apply(null, numArray));

 }
getMaxOfArray(palindromes);

