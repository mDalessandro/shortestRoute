/*
PROMPT

Jennifer is a fashion buyer for an international apparel and footwear retailer. She
often finds herself traveling to discover new industry trends. To keep her time
on the road to a minimum, she is enlisting the help of a programmer friend (you)
to help her find the shortest route between her current location and her next
destination.

Your program should accept the following inputs:

1. A list containing the city pairs and the distance between them, as an array of arrays
  For example:
  [
    [Boston,New York,50],
    [Boston,Hartford,25],
    [Hartford,New York,35],
    [New York,Philadelphia,40]
  ]
Note that each city pair in the input list should be considered bi-
directional. So (Boston,New York,50) means that it is valid to travel from
Boston to New York at a distance of 50 AND it is also valid to travel from
New York to Boston at a distance of 50.

2. The name of the starting city (as string)
  For example: Boston

3. The name of the destination city (as string)
  For example: Philadelphia

Your program should return a list of the cities that comprise the shortest route:
  1. For the example above, your program would return:
    Boston,New York,Philadelphia

You can write the program in any language you choose. However, Jennifer
needs to be able to run your program on her laptop computer. So in addition to
the source code, you should provide her with documentation on how to compile
and execute your code. Your documentation should also describe what, if any,
testing was performed to verify your solution.  
*/

// input: see above
// output: a list of cities (array) compromising the shortest route from startingCity to destination
// contraints/complexity: none (will start by getting it working and improving later)
// examples/edge cases: 
  /*
  cities:
    Boston,New York,50
    Boston,Hartford,25
    Hartford,New York,35
    New York,Philadelphia,40
  */
  // func(cities, Boston, Boston) -> [Boston]
  // func(cities, Boston, New York) -> [Boston, New York]
  // func(cities, Boston, Philadelphia) -> [Boston, New York, Philadelphia]


//****================
//INPUTS (Change values here)
//****
let cities = [  // Format = [city1, city2, distance]
  ['Boston','New York',50],
  ['Boston','Hartford',25],
  ['Hartford','New York',35],
  ['New York','Philadelphia',40] 
]; 
let startingCity; 
let destination;
//====================


// Pseudocode for "arrayToObj"
  // declare var called 'cities' and initialize as empty object
  // iterate through input array
    // if index 0 of 'cityPair' doesn't exist as prop in 'cities'
      // add new prop to 'cities' with key as index 0 of 'cityPair' and val as an empty {}
    // if index 1 of 'cityPair' doesn't exist as prop in 'cities'
      // add new prop to 'cities' with key as index 1 of 'cityPair' and val as an empty {}
    // for prop in 'cities' with key of 'cityPair' index 0, add new prop with key as 'cityPair' index 1 and val as 'cityPair' index 2 
    // for prop in 'cities' with key of 'cityPair' index 1, add new prop with key as 'cityPair' index 0 and val as 'cityPair' index 2    
  //return 'cities'
    
function arrayToObj(array) {
// Pseudocode for "arrayToObj"
  // declare var called 'cities' and initialize as empty object
  let cities = {}
  // iterate through input array
  for (let cityPair of array) {
    // if index 0 of 'cityPair' doesn't exist as prop in 'cities'
    if (!cities[cityPair[0]]) {
      // add new prop to 'cities' with key as index 0 of 'cityPair' and val as an empty {}
      cities[cityPair[0]] = {};
    }
    // if index 1 of 'cityPair' doesn't exist as prop in 'cities'
    if (!cities[cityPair[1]]) {
      // add new prop to 'cities' with key as index 1 of 'cityPair' and val as an empty {}
      cities[cityPair[1]] = {};
    }
    let city1 = cities[cityPair[0]];
    let city2 = cities[cityPair[1]];
    let distance = cityPair[2];
    // for prop in 'cities' with key of 'cityPair' index 0, add new prop with key as 'cityPair' index 1 and val as 'cityPair' index 2 
      city1[cityPair[1]] = distance;
    // for prop in 'cities' with key of 'cityPair' index 1, add new prop with key as 'cityPair' index 0 and val as 'cityPair' index 2    
      city2[cityPair[0]] = distance;
  }
  return cities;
};

function shortestRoute(cityList, start, end) {
  return undefined;
};

let cityObj = arrayToObj(cities);
//console.log( shortestRoute(cityObj, startingCity, destination) );







