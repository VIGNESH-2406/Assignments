function isPalindrome(str) {
  const revestr = str.split("").reverse().join("");
  return revestr === str;
}
const output = isPalindrome("racecar");
console.log(output);

//////////////////////////////////////////////////////////////////////////////////
function reverseString(str) {
  let revserseStr = "";
  for (let item of str) {
    revserseStr = item + revserseStr;
  }
  if (revserseStr === str) {
    return "yes its a palindrome";
  } else return "not a palindrome";
}
console.log(reverseString("racecar"));
//////////////////////////////////////////////////////////////////////////////////////////

// capitalize letters
function capsFirstLetters(str) {
  const strArr = str.toLowerCase().split(" ");

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(" ");
}
console.log(capsFirstLetters("hello HoOOOw arRRRRe you"));
////////////////////////////////////////////////////////////////////////////////////////

function capsAllLetters(str) {
  const strArr = str.toLowerCase().split(" ");

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0).toUpperCase();
  }
  return strArr.join(" ");
}
console.log(capsALLLetters("hello HoOOOw arRRRRe you"));

let a = [1, 2, 3, 6, 7, 8, 9, 7, 5, 43, 2, 56, 67, 7, 43, 23];

// function findOdd(value) {
//   for (let i = 0; i < value.length; i++) {
//     if (value[i] % 2 !== 0) {
//       console.log(value[i]);
//     }
//   }
// }

// console.log(findOdd(a));
/////////////////////////////////////////////////////////////////////
//find odd with arrow functions
console.log(a.filter((num) => num % 2 !== 0));

////////////////////////////////////////////////////////////////////////
//sum  of all numbers
console.log(a.reduce((acc, curr) => acc + curr, 0));
// let a = [1, 2, 3, 6, 7, 8, 9];
let b = [1, 2, 3, 6, 7, 8, 9];

// median of two sorted arrays
let c = [1, 3, 5];
let d = [2, 3, 6];
let e = [];
let j = 0;
let i = 0;
let median = 0;
for (i = 0; i < c.length && j < d.length; ) {
  if (c[i] < d[j]) {
    e.push(c[i]);
    i++;
  } else if (c[i] > d[j]) {
    e.push(d[j]);
    j++;
  } else {
    //e.concat([d[j], c[i]]);
    e.push(d[j]);
    e.push(c[i]);
    i++;
    j++;
  }
}
if (i === c.length - 1) e.push(c[i]);
else e.push(d[j]);

if (e.length % 2 === 0) {
  let mid1 = e.length / 2;
  let mid2 = e.length / 2 - 1;
  median = (e[mid1] + e[mid2]) / 2;
} else median = e[e.length / 2];

console.log(median);
