const companies = [
  { names: "company one", category: "finance", start: 1971, end: 2005 },
  { names: "company two", category: "finance", start: 1981, end: 2003 },
  { names: "company three", category: "retail", start: 1989, end: 2006 },
  { names: "company four", category: "finance", start: 1981, end: 2079 },
  { names: "company five", category: "finance", start: 1985, end: 2003 },
  { names: "company six", category: "retail", start: 1987, end: 2015 },
  { names: "company seven", category: "finance", start: 1981, end: 2012 },
  { names: "company eight", category: "retail", start: 1981, end: 2020 },
];

let companyName = companies.map(({ start, end, names }) => {
  if (`${Math.abs(end - start) > 20}`) {
    return `${names} lasted more than 7 years `;
  }
});

console.log(companyName);

//ACCESSING PROPERTY USING DOT OPERATORS
let b = companies[0].names;
let c = companies[0].category;
let d = companies[0].start;
let e = companies[0].end;
// // console.log(b);
// // console.log(c);
// // console.log(d);
// // console.log(e);

// for (let val of companies) {
//   console.log(val);
// }

// //DESTRUCTURING the object ` enables MULTIPLE ACCESS TO THE ELEMENT in object
// let { start, end } = companies[0];
// console.log(start, end);

//ACCESSING WITH BRACKET NOTATION
// let g = companies[0]["start"];
// console.log(g);

////
//

ages = [34, 34, 34, 345, 6, 24, 556, 543, 56, 35, 3, 563, 564, 4, 536, 635];

let candrnk = ages.filter((age) => age > 21);

// console.log(candrnk);
const lastedTenyears = companies.filter(
  (company) => company.end - company.start > 30
);

// console.log(lastedTenyears);

const eightiesCompany = companies.filter(
  (x) => x.start >= 1980 && x.start <= 1990
);

// console.log(eightiesCompany);

const companyStarts = companies.map((x) => {
  x.names = x.names.toUpperCase();
  x.end += 2;
  return x;

  //destructuring is used for few properties to be changed
  const companyStarts = companies.map(({ start, end }) => {
    // start += 2;
    // end += 2;
    return { start, end };
  });
  // console.log(companyStarts);

  // to return the whole object with few elements changed
  const companyStarts = companies.map((x) => {
    x.names = x.names.toUpperCase();
    x.end += 2;
    return x;
  });

  // console.log(companyStarts);

  const incStart = companies.map((x) => x.start + 2);

  // console.log(incStart);
  // STRING INTERPOLATIN ---- MANIPULATIONS IS DONE INSIDE DOLLAR, ANYTHING OUTSIDE IS TAKEN as STRING
  const testMap = companies.map(
    (x) => `${x.names.toUpperCase()}, Active years[${x.end - x.start}]`
  );
  // console.log(testMap);

  const years = ages.sort((a, b) => b - a);
  // console.log(years);

  const agesum = ages.reduce((acc, curr) => acc + curr, 0);
  // console.log(agesum);

  /// flattening array with reduce
  let ages111 = [
    [34, 34],
    [34, 345, 6, 24, 556, 543, 5],
    [35, 3, 563, 564, 4],
    [536, 635],
  ];

  let flattenArray = ages111.reduce((acc, curr) => acc.concat(curr), []);

  // console.log(flattenArray);

  //divide the array in half and check whether the average of each half is same

  // let a = [4, 1, 2, 3, 5, 7];

  //third non repeating element to be printed = 89
  // let b = [25, 46, 7, 87, 89, 7, 67, 87, 49, 56];

  const org = [
    {
      names: "nike",
      category: "track&field",
      startYear: 1960,
      location: " new jersey",
    },
    {
      names: "adidas",
      category: "track&field",
      startYear: 1960,
      location: "Banglore",
    },

    {
      names: "nike",
      category: "football",
      startYear: 1990,
      location: " new jersey",
    },

    {
      names: "puma",
      category: "track&field",
      startYear: 1989,
      location: "Ireland",
    },

    {
      names: "asics",
      category: "volleyball",
      startYear: 1978,
      location: " switzerland",
    },

    {
      names: "bunny",
      category: "Athletics",
      startYear: 2010,
      location: " new jersey",
    },
  ];

  // // let ansk = Object.keys(org[0]);
  // // console.log(ansk);
  // let arr = Object.entries(org);
  // // console.log(arr);
  // // let obj = arr[0][1];
  // // for (let keys of Object.entries(obj)) {
  // //   console.log(`${keys[0]} -- ${keys[1]}`);
  // // }
  // // for (let c of org) {
  // //   for (let keys of Object.entries(c)) {
  // //   console.log(`${keys[0]} -- ${keys[1]}`);
  // // }
  // // console.log("...............");
  // // }
  // // for (let val of org) {
  // //   console.log(val);
});
