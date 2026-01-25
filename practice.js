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
console.log(secondLargestNumber([1, 2, 3, 4]));

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

console.log(countVowels("javascript"));