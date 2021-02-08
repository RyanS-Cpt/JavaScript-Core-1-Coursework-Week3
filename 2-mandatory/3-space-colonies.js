/*
  The voyagers decide that they quite like this planet, and some of them want to settle there and colonise it.

  They call the planet "Alpha" and they decide that the FAMILIES whose last names start with 'A' should stay,
  while the others go on in search of other planets to call home.

  Create a function that returns an array of colonizers that will stay, according to the above rules.

  NOTE: don't include any element that is not a "family".

  HINT: Whenever you read the above the instructions, try to come up with the main input and output and logic
        Input: Is an array
        Output: Is an array
        Logic: Only strings that start with A, and finish with family
  
*/
let crewPicker = function (crewArr){
  let crewStr = crewArr.toString();
  for (let i =0; i<crewStr.length; i++){
    if (crewStr[i].includes("family")){
      return crewStr[i];
}
  }
}

function colonizers(voyagersArr) {
  let crewToStay = [];
  let newCrew = crewPicker(voyagersArr);
  for (let j = 0; j<newCrew.length; j++){
    if (newCrew[j].startsWith("A")){
      return newCrew[j];
    }
  }

  
      return crewToStay;
    }  // use arr.filter()?

/* ======= TESTS - DO NOT MODIFY ===== */

const voyagers = [
  "Adam family",
  "Potter family",
  "Eric",
  "Aldous",
  "Button family",
  "Jude",
  "Carmichael",
  "Bunny",
  "Asimov",
  "Oscar family",
  "Avery family",
  "Archer family",
];

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (util.isDeepStrictEqual(actual, expected)) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("colonizers function works", colonizers(voyagers), [
  "Adam family",
  "Avery family",
  "Archer family",
]);
