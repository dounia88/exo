

// Exercise 1:
 //Greetings
// Create a function called greet that takes a name parameter and prints a greeting message to the console.
//  Call the function with different names.
// Exercise 1: Greetings



  
  function greet(name) {
    console.log("hello " + name + " welcome");
    
  }
  greet ("dounia");
  greet ("ayoub");
  greet ("halima");
  greet ("youness");

// Exercise 2: Sum of Numbers
// Create a function called sumNumbers that takes an array of numbers as a parameter and returns the sum of those numbers. Call the function with different arrays.


function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  console.log(sumNumbers([1, 2, 3, 4]));        
  console.log(sumNumbers([10, 20, 30]));        
  console.log(sumNumbers([-5, 5, 10]));       
  console.log(sumNumbers([]));               
  
// Exercise 4: Even or Odd
// Create a function called isEven that takes a number as a parameter and prints whether the number is even or odd to the console. Use an if-else statement. Call the function with different numbers.


function isEven(number) {
    if (number % 2 === 0) {
      console.log(number + " is even.");
    } else {
      console.log(number + " is odd.");
    }
  }
  isEven(4);    
  isEven(7);    
  isEven(0);    
  isEven(-3);   
  isEven(22);   
  


// Exercise 6: Palindrome Check
// Create a function called isPalindrome that takes a string as a parameter and prints whether the string is a palindrome (reads the same backward as forward) to the console. Ignore spaces and case. Use loops and conditional statements. Call the function with different strings.
function isPalindrome(str) {
  
    let reversedStr = cleanStr.split("").reverse().join("");
  
    
    if (cleanStr === reversedStr) {
      console.log(`"${str}" est un palindrome.`);
    } else {
      console.log(`"${str}" n'est pas un palindrome.`);
    }
  }
                
  isPalindrome("Bonjour");               
  

// Exercise 7: Maximum of Two Numbers
// Create a function called maxOfTwo that takes two numbers as parameters and prints the larger of the two to the console. Use an if-else statement. Call the function with different numbers.

function maxOfTwo(num1, num2) {
    // if (num1 > num2) {
    //   console.log(num1 + " is larger.");
    // } else if (num2 > num1) {
    //   console.log(num2 + " is larger.");
    // } else {
    //   console.log("Both numbers are equal.");
    // }
    num1 === num2 ? console.log("Both numbers are equal.") 
    : num1 > num2 ? console.log(num1 + " is larger.") 
    : console.log(num2 + " is larger.");
  
  }
  
  maxOfTwo(10, 20);   
  maxOfTwo(100, 50);  
  maxOfTwo(7, 7);     
  maxOfTwo(-5, 3);    
  
// Exercise 8: Array Sum
// Create a function called arraySum that takes an array of numbers as a parameter and prints the sum of those numbers to the console. Use the for...of loop. Call the function with different arrays.

function array(num) {
  let sum = 0;
for (let index = 0; index < num.length; index++) {
  sum += num[index];

}
console.log("The sum of num: " + sum);
  
}

array([1, 5, -9, 44]);      
array([11, 80, 220]);       
            

// Exercise 9: Factorial Without Recursion
// Create a function called factorial that takes a number as a parameter and prints the factorial of that number to the console. Calculate the factorial without using recursion. Call the function with different numbers.
function factorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  console.log("The factorial of " + number + " is: " + result);
}

factorial(0); 
factorial(1); 
factorial(5); 
factorial(7); 

// Exercise 10: Vowel Checker
// Create a function called isVowel that takes a character as a parameter and prints whether the character is a vowel or not to the console. Use an if-else statement. Call the function with different characters.
function isVowel(character) {
  let arrey =["i", "o", "e", "u", "a"]
     return arrey.includes(character.toLowerCase())
 }
 
 console.log(isVowel("b"));
 console.log(isVowel("u"));
 console.log(isVowel("c"));
 console.log(isVowel("e"));
// Exercise 11: Largest in Array
// Create a function called largestInArray that takes an array of numbers as a parameter and prints the largest number in the array to the console. Use the Math.max function. Call the function with different arrays.
function largestInArray(numbers) {
  let largest = Math.max(...numbers); //  ... no9ate katraje3 kola wehda bohdha
  console.log("The largest number is: " + largest);
}


largestInArray([5, 10, 3, 20, 8]);      
largestInArray([100, 55, 87, 99]);      
largestInArray([-5, -2, -10, -1]);      
largestInArray([7]);                    

// Exercise 12: Prime Number Checker
// Create a function called isPrime that takes a number as a parameter and prints whether the number is a prime number or not to the console. Use loops and conditional statements. Call the function with different numbers.
function isPrime(number) {
    
      
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(number + " is prime ");
      break
    }
    console.log(number + " is not a prime number"); 
  }

}
isPrime(4);   
isPrime(17);  
isPrime(20);  
isPrime(97);
// Exercise 13: Sum of Digits
// Create a function called sumOfDigits that takes a positive integer as a parameter and calculates the sum of its digits. Print the result to the console.
function sumOfDigits(number) {
  let sum = 0;
  let digits = number.toString().split(''); 
  for (let digit of digits) {
    sum += parseInt(digit);  
  }
  console.log("The sum of num "+ sum);
}

sumOfDigits(798);  
sumOfDigits(890);  
sumOfDigits(2636);

// Create a function called arrayIntersection that takes two arrays as parameters and returns a new array containing the common elements between them.
function arrayIntersection(arr1, arr2) {
  let intersection = arr1.filter(element => arr2.includes(element));
  return intersection;
}

console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])); 
console.log(arrayIntersection([10, 20], [30, 40])); 


// exo fibonacci
function fibonacci(n) {
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}

fibonacci(5);  

