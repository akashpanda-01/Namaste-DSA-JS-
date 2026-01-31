// Print All Even Numbers in An Array
let arr = [10, 2, 3, 5, 6, 7, 8];
let outPut = [];
for (let i = 0; i <= arr.length; i++) {
  if (arr[i] % 2 === 0) {
    outPut.push(arr[i]);
  }
}
// console.log(outPut);

// Find The Second Largest Number In An Array
function secondLargestNumber(num) {
  let secLargest = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = 1; j < num.length; j++) {
      if (num[i] < num[j]) {
        secLargest.push(num[j]);
      } else if (num[i] === num[j]) {
        return "No second Largest Found";
      } else if (num.length < 2) {
        return "Array Should Have At Least two Numbers";
      }
    }
  }
  return secLargest;
}
// console.log(secondLargestNumber([1, 2, 3, 4]));

// function secondLargestNumber(arr){
//     if(arr.length < 2) return "Array Should Have at Least 2 Numbers";
//     let first = 0 , second = 0 ;
//     for(let num of arr){
//         if(num > first){
//             second = first;
//             first = num;
//         } else if (num > second && num !== first){
//             second = num;
//         };
//     };
//     return second === 0 ? "No Second largest Found" : second;
// };
// console.log(secondLargestNumber([1 ,4, 5, 6, 7, 8]));

// Count Vowels in a String
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

// console.log(countVowels("javascript"));

// Find The Largest Element in an Array
function largestElement(arr){
  let largest = 0;
  for(let element of arr){
    if(element > largest){
      largest = element;
    }
  }
  return largest;
};
// console.log(largestElement([1, 2, 3, 4, 5]));


// Find The Second Largest in an Array
function secondLargest(arr){
  let largest = 0, secondLargest = 0;
  for(let element of arr){
    if(element > largest){
      secondLargest = largest;
      largest = element;
    }
  }
  return secondLargest;
};
// console.log(secondLargest([1, 2, 3, 4, 5]));


// Find The Smallest and Largest in an Array
function findLargSmall(arr){
  let largest = arr[0], smallest = arr[0];
  for(let element of arr){
    if(element > largest){
      largest = element;
    }
    if(element < smallest){
    smallest = element;
    }
  }
  return {smallest, largest};
};
// console.log(findLargSmall([2, 3, 4, 1, 5]).smallest);

// Reverse an Array
function reverseArray(arr){
  let right = arr.length-1;
  // let left = 0;
  let revArr = [];
  for(let i = right; i >= 0; i--){
    // let temp = left;
    if(i <= arr[i]){
      revArr.push(arr[i]);
    }
  }
  return revArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
