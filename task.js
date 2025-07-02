// 1. find the sum of even numbers

// function sumEvenNumbers(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 == 0) { 
//             sum += numbers[i];
//         } else {
//             continue;
//         }
//     }
//     return sum;
// }

// console.log(sumEvenNumbers([1, 2, 3, 4, 5])); 

// /2. find the factorial

// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) { 
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(5));

// / 2 Task:Check Prime Number 
// function isPrime(n) {
//     if(n<=1) return false;
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         } else {
//             return true;
//         }
//     }
//     return true;
// }

// console.log(isPrime(9)); 

// 4. Task: Remove Duplicates from Array
// function removeDuplicates(arr) {
//     let result = [];
//     for (let i = 0; i <= arr.length; i++) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(removeDuplicates([1,2,2,3])); // Expected: [1, 2, 3]

// function reverseArray(arr) {
//     for (let i = 0; i < arr.length / 2; i++) {
//         let temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//     return arr;
// }

// console.log(reverseArray([1, 2, 3, 4, 5]));

// /6. Task: Find the Largest Number (Logical Error)
// Description: This function should return the largest number from an array


// function findLargest(arr) {
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) { 
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// console.log(findLargest([3, 7, 2, 9, 5])); // Expected output: 9, but incorrect result

// find the count of vowels

function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) count++;  
    }
    return count;
}

console.log(countVowels("Hello World")); // Expected: 3, but returns 2

//8.  Function to fetch user data from an API
