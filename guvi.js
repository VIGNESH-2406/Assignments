// function isPalindrome(str) {
//   const revestr = str.split("").reverse().join("");
//   return revestr === str;
// }
// const output = isPalindrome("racecar");
// console.log(output);

// //////////////////////////////////////////////////////////////////////////////////
// function reverseString(str) {
//   let revserseStr = "";
//   for (let item of str) {
//     revserseStr = item + revserseStr;
//   }
//   if (revserseStr === str) {
//     return "yes its a palindrome";
//   } else return "not a palindrome";
// }
// console.log(reverseString("racecar"));
////////////////////////////////////////////////////////////////////////////////////////////

//capitalize letters
// function capsFirstLetters(str) {
//   const strArr = str.toLowerCase().split(" ");

//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] =
//       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
//   }
//   return strArr.join(" ");
// }
// console.log(capsFirstLetters("hello HoOOOw arRRRRe you"));
//////////////////////////////////////////////////////////////////////////////////////////

// function capsAllLetters(str) {
//   const strArr = str.toLowerCase().split(" ");

//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] = strArr[i].substring(0).toUpperCase();
//   }
//   return strArr.join(" ");
// }
// console.log(capsALLLetters("hello HoOOOw arRRRRe you"));

// let a = [1, 2, 3, 6, 7, 8, 9, 7, 5, 43, 2, 56, 67, 7, 43, 23];

// // function findOdd(value) {
// //   for (let i = 0; i < value.length; i++) {
// //     if (value[i] % 2 !== 0) {
// //       console.log(value[i]);
// //     }
// //   }
// // }

// // console.log(findOdd(a));
// /////////////////////////////////////////////////////////////////////
// //find odd with arrow functions
// console.log(a.filter((num) => num % 2 !== 0));

// ////////////////////////////////////////////////////////////////////////
// //sum  of all numbers
// console.log(a.reduce((acc, curr) => acc + curr, 0));
// // let a = [1, 2, 3, 6, 7, 8, 9];
// let b = [1, 2, 3, 6, 7, 8, 9];

//median of two sorted arrays
// let c = [1, 3, 5];
// let d = [2, 3, 6];
// let e = [];
// let j = 0;
// let i = 0;
// let median = 0;
// for (i = 0; i < c.length && j < d.length; ) {
//   if (c[i] < d[j]) {
//     e.push(c[i]);
//     i++;
//   } else if (c[i] > d[j]) {
//     e.push(d[j]);
//     j++;
//   } else {
//     //e.concat([d[j], c[i]]);
//     e.push(d[j]);
//     e.push(c[i]);
//     i++;
//     j++;
//   }
// }
// if (i === c.length - 1) e.push(c[i]);
// else e.push(d[j]);

// if (e.length % 2 === 0) {
//   let mid1 = e.length / 2;
//   let mid2 = e.length / 2 - 1;
//   median = (e[mid1] + e[mid2]) / 2;
// } else median = e[e.length / 2];

// console.log(median);

/////////////////////////////////////////////////////////////////////////////////////

//rotate k times
// let a = [1, 5, 6, 7, 7, 9, 6, 7, 5];

// let k = 2;

// // while (k !== 0) {
// //   a.push(a.shift());
// //   k--;
// // }
// // console.log(a);

// while (k !== 0) {
//   a.unshift(a.pop());
//   k--;
// }
// console.log(a);

// class calc {
//   constructor(len, wid, num) {
//     this.len = len;
//     this.wid = wid;
//     this.num = num;
//   }
//   getmult3() {
//     console.log(this.num * 3);
//   }
// }

//CALC WITH CLASS------------------------------------------
// class rec {
//   constructor(len, wid) {
//     this.len = len;
//     this.wid = wid;
//   }

//   getmult() {
//     console.log(this.len * this.wid);
//   }
//   getaddition() {
//     console.log(this.len + this.wid);
//   }
//   getsubtraction() {
//     console.log(this.len - this.wid);
//   }
//   getdivision() {
//     console.log(this.len / this.wid);
//   }
// }
// let rect1 = new rec(10, 10);
// rect1.getmult();
// rect1.getaddition();
// rect1.getsubtraction();
// rect1.getdivision();
////////////////////////////////////////////////////////////////////////

// let obj1 = { name: "Guvi ", age: 24 };
// let obj2 = {
//   name: "zen",
//   age: 25,
//   ...obj1,
// }; /* obj2 will give us the last value assigned to it , it it has duplicate keys */

// console.log(obj2.name);

// function print() {
//   if (1) {
//     var x = 10;
//   }
// }
// console.log(x);
// print();

// let inputs = [
//   { id: "one ", value: 1 },
//   { id: "two", value: 2 },
//   { id: "three", value: 3 },
// ];
// var output = Object.assign(
//   {},
//   ...inputs.map((item) => ({ [item.id]: item.value }))
// );
// console.log(output);

// let inputs = [
//   { id: "one", value: 1 },
//   { id: "two", value: 2 },
//   { id: "three", value: 3 },
// ];

// console.log(inputs);

// a = 8 + "8";
// console.log(a);

// OBJECT ITERATION--------------------------------
// let arr = [1, 2, 3, 4, 5];

// let arr1 = [5, 4, 3, 2, 1];

// let obj = {};
// let ans = [];
// for (let i = 0; i < arr1.length; i++) {
//   obj[arr1[i]] = i;
//   console.log(obj);
// }
// let a = Object.entries(obj).sort((a, b) => a - b);
// console.log(a);
// for (let item of a) {
//   ans.push(arr[item[1]]);
// }
// console.log(ans.join(" "));
//-----------------------------------------------------------
// let str = "hello";

//     let obj = {};

// for (let i = 0; i < str.length; i++) {
//   if (str[i] in obj) {
//     obj[str[i]] += 1;
//   } else obj[str[i]] = 1;
// }
// for (let i = 0; i < str.length; i++) {
//   if (obj[str[i]] > 1) {
//     console.log(`${str[i]} ${obj[str[i]]} times repeated`);
//     break;
//   }
// }

// const obj = { value: 20 };

// const obj1 = { ...obj };
// obj1.value = 30;
// console.log(obj1.value);
// console.log(obj.value);

// let str = "hello"
// let arr= [...str]
//   arr.sort()
// let count=1
//   for(let i=1;i<arr.length;i++){
//     if(arr[i-1]===arr[i]){
//    count++
//   }
//     else count=1
//   }

//   c=onsole.log(`${count} `)

// let obj = {
//   name: "harry",
//   getName() {
//     setTimeout(function () {
//       console.log(this);
//     }, 2000);
// //   },
// // };
// // obj.getName();
// /*

// */
// ////---------------
// const arr = [1, 1, 1, 2, 2, 2, 3, 8, 9, 7];
// const arr1 = [1, 2, 3, 0, 5];

// let obj = {};
// let result = [];

// for (let num of arr) {
//   if (num in obj) {
//     obj[num] += 1;
//   } else obj[num] = 1;
// }
// for (let item of arr1) {
//   if (item in obj) {
//     result.push(obj[item]);
//   } else result.push("not present");
// }
// console.log(result.join(" "));

//

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// const isBanana = fruits.filter((fruit,index) => {
//   if (fruit.length === 5 || fruit === "Apple") {
//     console.log("yes");
//   } else if (fruit[0] === "Banana") {
//     console.log("its banana");
//   } else {
//     console.log("no");
//   }
// });

// console.log(isBanana);

//  remove the immediate duplicate digits

//next number to be smallest if not print -1
// Sample Input :
// 7
// 10 7 9 3 2 1 15
// Sample Output :
// 7 3 3 2 1 -1 -1
// let arr = [10, 7, 9, 3, 2, 1, 15];
// const res = [];
// for (let i = 0; i < arr.length; i++) {
//   let flag = false;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[i]) {
//       flag = true;
//       res.push(arr[j]);
//       break;
//     }
//   }
//   if (!flag) res.push(-1);
// }

// console.log(res.join(" "));

//print the missing number
// let a = [1, 3, 5, 2];
// let n = a.length + 1;
// let s = (n * (n + 1)) / 2;

// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//   sum += a[i];
// }
// console.log(s - sum);

// //sum of increasing subarray
// let a = [2, 1, 4, 7, 3, 6];
// let sum = 0;

// let ans = a[0];

// for (let i = 1; i < a.length; i++) {
//   if (a[i - 1] < a[i]) {
//     if (sum === 0) sum += a[i - 1] + a[i];
//     else {
//       sum += a[i];
//     }
//   } else {
//     ans = Math.max(sum, ans);
//     sum = 0;
//   }
// }
// console.log(ans);

//find kth smallest number

// let a = [1, 1, 2, 4, 5];
// let k = 2;
// //  let c= k[1]
// let b = a.sort();
// let count = 1;

// for (let i = 1; i < b.length; i++) {
//   if (b[i - 1] !== b[i]) {
//     count++;
//   }
// }
// if (k > count) {
//   console.log(-1);
// } else console.log(b[k - 1]); /* CUZ OF ZERO BASED ARRAY INDEX B[K-1]*/

//reverse string using stack
// let arr = "i am jsb".split(" ")
// let stack = [];

// for (let i = 0; i < arr.length; i++) {
//   stack.push(arr[i]);
// }

// console.log(stack.reverse().join(" "));

// let arr = ["badger", "beaver", "baboon"];

// // for (let i of arr) {
// //   console.log(i);
// // }

// const equine = { flower: "🌻", zebra: "z", unicorn: "u" };

// // for (let i in equine) {
// //   console.log([i]);
// // }
// //o/p ["horse"]["zebra"]["unicorn"];

// for (let i in equine) {
//   console.log(equine[i]);
// }

//o/p;
//  H;
// z;
// u;

// for (let i in equine) {
//   console.log(equine);
// }
//o/p
// { horse: 'H', zebra: 'z', unicorn: 'u' }
// { horse: 'H', zebra: 'z', unicorn: 'u' }
// { horse: 'H', zebra: 'z', unicorn: 'u' }

// for (let i in equine) {
//   console.log(i);
// }
//o/p
//horse;
//zebra;
//unicorn;

// const faces = ["hey", "hello", "hii", "hii", "hey", "heyyyy"];

// const heyCount = faces.reduce((acc, curr) => {
//   return acc + (curr !== "hey" ? 1 : 0);
// }, 0);

// console.log(heyCount);

//  Print the least occurring element.
//  const arr = [1, 6, 4 ,56 ,56 ,56 ,6 ,4 ,2]
//  const obj = {};

//  for (let value of arr) {
//    if (value in obj) obj[value] += 1;
//    else obj[value] = 1;
//  }

//  let least = obj[arr[0]];
//  let result = [];
//  for (let value of arr) {
//    if (obj[value] <= least) {
//      least = obj[value];
//    }
//  }
//  arr.forEach((e) => {
//    if (obj[e] === least) result.push(e);
//  });

//  console.log(result.join(" "));

// Given a string S, print it after changing the middle element to * (if the length of the string is even, change the 2 middle elements to *).
//  var a= userInput[0];
//     var b= [...a];
//    let l= a.length;

//    if(l==1){
//           b[0]="*";
// }

// else if(l%2==0){
//     b[l/2]="*"
//     b[l/2-1]="*"
// }
//  else
//      b[l/2]="*"

//  console.log(b.join(""))

// rearrange the numbers such that arr[i] becomes arr[arr[i]].
//  let arr = userInput[1].split(" ").map((x) => parseInt(x));

//  let b = [];

//  for (let i of arr) {
//    b[i] = arr[arr[i]];
//  }

//  console.log(b.join(" "));

// without disturbing the descending order of books
// function compare(arr, n) {
//   let j = 0;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] > n) {
//       return arr.length - j + 1;
//     }
//     j++;
//   }
//   return -1;
// }
// let arr = [95, 68, 62, 58, 55, 41, 30];
// let arr1 = [45, 61];
// let ans = [];

// for (let item of arr1) {
//   let temp = compare(arr, item);
//   if (temp !== -1) {
//     ans.push(temp);
//   }
// }
// console.log(ans.join(" "));

// //  by adding 3 to each character
// let arr = "RADAR";
// let output = [];
// for (let i = 0; i < arr.length; i++) {
//   let c = arr.charCodeAt(i);
//   let a = (c - 65 + 3) % 26;
//   output.push(String.fromCharCode(65 + a));
// }
// console.log(output.join(""));

//  print the digit with maximum frequency.
// let a = [1, 2, 3, 4, 4, 4, 5];
// let max = 0;
// let count = 0;
// let stack = [];

// for (let i = 1; i < a.length; i++) {
//   if (a[i] === a[i - 1]) {
//     count++;
//     max = Math.max(max, count);
//     if (stack.length === 0) stack.push({ max, val: a[i] });
//     if (stack[0].max < max) {
//       stack.pop();
//       stack.push({ max, val: a[i] });
//     } else if (a[i] !== a[i - 1]) {
//       count = 1;
//     }
//   }
// }
// console.log(stack[0].val);

// print the number of subarrays that can be formed
// let n = [1, 2, 3, 2, 1]
// console.log(Math.floor((n * (n + 1)) / 2));
