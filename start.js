// These exercises are aimed at making you familiar with logical operators. **Print all your checks to the console. Make sure that you are using the *correct* logical operator.**

// 0. Declare two variables: `isDogBetter` with the value of `true`, and `isCatBetter` with the value of `false`.

const isDogBetter = true;
const isCatBetter = false;

// 1. Check the result of:

// - a) isDogBetter AND isCatBetter.

console.log(isDogBetter && isCatBetter);

// it's false because the the both variables are different

// - b) isDogBetter OR isCatBetter.

console.log(isDogBetter || isCatBetter);

// it's true because one of them is true 

// - c) NOT (isDogBetter AND isCatBetter).
console.log(!(isDogBetter && isCatBetter));
// it's true because it's checking if are different



// 2. Declare three more variables `atoms`, `sandGrains`, `starsInSky`. Give these variables number values.
const atom = 10;
const sandGrains = 20;
const starsInSky = 30;

// 3. Check the result of whether:

// - a) `atoms` is greater than `starsInSky` AND `atoms` is greater than `sandGrains`.
console.log((atom>starsInSky) && (atom>sandGrains));

// - b) `atoms` is NOT equal to `sandGrains`.
console.log(!(atom===sandGrains));

// - c) `starsInSky` is less than `sandGrains` OR `starsInSky` is greater than `atoms`.
console.log((starsInSky<sandGrains) || (starsInSky>atom));

// - d) `atoms` is equal to `starsInSky` OR `atoms` is NOT equal to `sandGrains`.
console.log((atom===starsInSky) || (atom !== sandGrains));

// - e) `atoms` is greater than or equal to 10 AND `sandGrains` is less than or equal to 10.
console.log((atom>= 10) && (sandGrains<= 10));

// - f) `atoms` multiplied by `starsInSky` is less than 100 OR whether `atoms` multiplied by `sandGrains` is greater than 100.
console.log((atom*starsInSky< 100)|| (atom*sandGrains> 100));
// 4. BONUS: In your own words, explain the logic of each result in a comment after the result.
