function narcissistic(value) {
  let arr=value.toString().split("")
  let result=0;
  for(let i=0;i<arr.length;i++){
    result+= Math.pow(+arr[i],arr.length) 
  }
  if(value===result){
    return true
  }else{
    return false
  }
}
console.log(narcissistic(487))

// Question:
// Write a function that determines if a number is 
// a narcissistic number (also known as an Armstrong 
// number). A narcissistic number is a number that 
// is equal to the sum of its own digits, 
// each raised to the power of the number of digits.

// Examples:

// narcissistic(153)  
// // Output: true  
// // Explanation: 1³ + 5³ + 3³ = 153  

// narcissistic(9474)  
// // Output: true  
// // Explanation: 9⁴ + 4⁴ + 7⁴ + 4⁴ = 9474  

// narcissistic(487)  
// // Output: false  
// // Explanation: 4³ + 8³ + 7³ ≠ 487  