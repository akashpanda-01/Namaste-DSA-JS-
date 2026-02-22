// Print All Even Numbers in An Array
// let arr = [10, 2, 3, 5, 6, 7, 8];
// let outPut = [];
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     outPut.push(arr[i]);
//   }
// }
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
// console.log(reverseArray([1, 2, 3, 4, 5]));

// Rotate An Array By k Position (left Rotation)
function rotateArr(arr, k){
  let n = arr.length;
  k = k % n;
  let rotated = [];
  for(let i = k; i < n; i++){
    rotated.push(arr[i]);
  }
  for(let i = 0; i < k; i++){
    rotated.push(arr[i]);
  }
  return rotated;
};
// console.log(rotateArr([1, 2, 3, 4, 5], 2));

// Right Rotation
function rigthRotationArr(arr, k){
  let n = arr.length -1;
  k = k % n;
  let rotatedArr = [];
  for(let i = n; i > k; i--){
    rotatedArr.push(arr[i]);
  };
  for(let i = 0; i <= k; i++){
    rotatedArr.push(arr[i]);
  };
  return rotatedArr;
};
// console.log(rigthRotationArr([1, 2, 3, 4, 5], 2));

// Remove Duplicates in an Array
function removeDuplicate(arr){
  let unique = [arr[0]]
  for(let i = 0; i < arr.length; i++){
    if(!unique.includes(arr[i])){
      unique.push(arr[i]);
    }
  };
  // console.log(unique);
};
removeDuplicate([1,1,2,3,4,5]);

// Remove Duplicates in Unshorted Array
function removeUnshortedDuplicate(arr){
  let seen = {};
  let result = [];
  for(let num of arr){
    if(!seen[num]){
      seen[num] = true;
      result.push(num);
    };
  };
  return result;
};
// console.log(removeUnshortedDuplicate([1, 4, 2, 3, 5, 1, 2]));

// Find Frequency Of Each Element
function findFrequency(arr){
  let frequency = {};
  for(let i = 0; i< arr.length; i++){
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
  }
  return frequency;
};
// console.log(findFrequency([1, 2, 1, 2, 3, 4, 3, 5]));

function findFrequency1(arr){
  let frequency = {};
  for(let i = 0; i < arr.length; i++){
    if(frequency[arr[i]]){
      frequency[arr[i]]++;
    } else {
      frequency[arr[i]] = 1;
    }
  }
  return frequency;
};
// console.log(findFrequency1[1, 2, 3, 4, 1, 2, 3]);

// Checking Eligibility
function isEligible(age){
  if(age < 18){
    console.log("Not Eligible");
  }
  else {
    console.log("Eligible");
  }
};
// isEligible(17);

// Checking Number is Even Or Odd
function isEvenOdd(num){
  let rem = num % 2;
  if(rem === 0){
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
};
// isEvenOdd(23);

// ---------------LOOP---------------------
// for(let i = 0; i < 10; i++){
//   console.log("Hello World");
// }



// for(let i = 0; i <= 4; i = i + 1){
//   console.log("Hello World", " ", i);
// }

// for(let i = 2; i < 9; i = i +2){
//   console.log("Hello World", " " + i);
// }

// // reverse loop
// for(let i = 5; i > 0; i = i - 1){
//   console.log("Hello World");
// }

// Function Inside Loop
function greet(){
  console.log("Hello World");
};
for(let i = 0; i < 5; i++ ){
  // greet();
};

// Array With Loop
let arr1 = [10, 2, 3, 1, 4, 5];
for(let i = 0; i <= arr1.length-1; i++){
  // console.log(arr1[i]);
};

// Print All The Even Numbers In the Array
function arrEvenNums(arr){
  for(let i = 0; i <= arr.length; i++){
    let isEven = arr[i] % 2;
    if(isEven === 0){
      console.log(arr[i]);
    }
  }
}
// arrEvenNums([2, 1, 2, 3, 4, 5, 6]);

// While Loop
function whileLoop(){
  let i = 0;
  while(i < 5){
    console.log("Hello World");
    console.log(i);
    i++;
    console.log(i);
  }
  console.log(i);
  
};
// whileLoop();

// Write a Functioon That Searches Of An Element In an Array and Returns the index, if The element is not present then just return -1
function searchIndex(arr, searchEle){
  for(let i = 0; i <= arr.length -1; i++){
    if(searchEle === arr[i]) return i;
  }
  return -1;
};
let result = searchIndex([1, 2, 3, 4, 5], 1);
// console.log(result);


// Write a Function That return the number of negative numbers in an array
function findNegativeNum(arr){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      count++
    };
  }
  return count;
};
// console.log(findNegativeNum([1, -1, -2, 3, -3, -5]));

// Write a Function That Returns The Largest Number In an Array
function findLargsetNum(arr){
  let largest = null;
  for(let i = 0; i < arr.length; i++){
    if(largest < arr[i]){
      largest = arr[i];
    };
  };
  return largest;
};
// console.log(findLargsetNum([10, 1, 2, 3, 4, 5]));

//  Write a Function That Returns The Minimum Number In an Array
function findMinimum(arr){
  let smallest = Infinity;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < smallest){
      smallest = arr[i];
    };
  }
  return smallest;
};
// console.log(findMinimum([1, -2, 10, 3, -1]));

// Find The Second Largest Number In Array
function findSecondLargest(arr){
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
      secondLargest = largest;
      largest = arr[i];
    } else if(arr[i] > secondLargest){
      secondLargest = arr[i];
    };
  };
  return secondLargest;
};
// console.log(findSecondLargest([7, 1, 2, 3, 4, 5, 6, 8]));

// Loops Inside Loops
// for(let i = 0; i < 5; i++){
//   console.log("Outside Loop");
//   for(let j = 0; j< 5; j++){
//     console.log("Inner Loop");
//   };
// };

// for(let i = 0; i < 5; i++){
//   for(let j = 0; j <= i; j++){
//     console.log(i , j);
//   };
// };

// for(let i = 0; i < 3; i++){
//   for(let j = i; j >= 0; j--){
//     console.log(i , j);
//   };
// };


// for(let i = 5; i > 0; i--){
//   for(let j = 0; j < i; j++){
//     console.log(i , j);
//   };
// };

// Star Pattern Question Practice
// for(let i = 0; i < 4; i++){
//   let row = "";
//   for(let j = 0; j < 4; j++){
//     row = row + " *";
//   }
//   console.log(row);
// }

// for(let i = 4; i > 0; i--){
//   let row = "";
//   for(let j = 0; j < i; j++){
//     row = row + " *";
//   };
//   console.log(row);
// };

// for(let i = 1; i < 4; i++){
//   let row = "";
//   for(let j = 0; j < i + 1; j++){
//     row = row + " *";
//   };
//   console.log(row);
// };

// for(let i = 0; i <= 5; i++){
//   let row = "";
//   for(let j = 1; j < i + 1; j++){
//     row = row +" "+ j;
//   };
//   console.log(row);
// };

// for(let i = 0; i < 5; i++){
//   let row = "";
//   for(let j = 0; j <= i; j++){
//     row = row + " " + (i + 1);
//   }
//   console.log(row);
// }

// for(let i = 1; i <= 5; i++){
//   let row = "";
//   for(let j = 1; j <= i; j++){
//     row = row + (i);
//   };
//   console.log(row);
  
//}

// for(let i = 5; i > 1; i--){
//   let row = "";
//   for(let j = 1; j <= i; j++){
//     row = row + (j);
//   };
//   console.log(row);
// }

// let n = 5;
// for(let i = 0; i < 5; i++){
//   let row = "";
//   for(let j = 1; j <= (n - i); j++){
//     row = row + j;
//   }
//   console.log(row);
// };

// for(let i = 0; i < 5; i++){
//   let row = "";
//   for(let j = 0; j < 5-(i+1); j++){
//     row = row + " -";
//   };
//   for(let k = 0; k < i + 1; k++){
//     row = row + " *"
//   };
//   console.log(row);
// }

let toggle = 1;
for(let i = 0; i<5; i++){
  let row = ""; 
  for(let j = 0; j < i + 1; j++){
    row = row + toggle;
    if(toggle === 1){
      toggle = 0;
    } else {
      toggle = 1;
    }
  };
  console.log(row);
}

for(let i = 0; i< 5; i++){
  let row = "", toggle = 1;
  for(let j = 0; j < i +1; j++){
    row = row + toggle;
    if(toggle === 1){
      toggle = 0;
    }else {
      toggle = 1;
    };
  };
  console.log(row);
};