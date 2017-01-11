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


//****============================
//INPUTS (Change values here)
//****
let cities = [  // Format = [city1, city2, distance]
  ['Boston','New York',50],
  ['Boston','Hartford',25],
  ['Hartford','New York',35],
  ['New York','Philadelphia',40] 
]; 
let startingCity = 'Philadelphia'; 
let destination = 'Hartford';
//================================

module.exports = {
// Pseudocode for "arrayToObj"
  // declare var called 'cities' and initialize as empty object
  // iterate through input array
    // if index 0 of 'cityPair' doesn't exist as prop in 'cities'
      // add new prop to 'cities' with key as index 0 of 'cityPair' and val as an empty {}
    // if index 1 of 'cityPair' doesn't exist as prop in 'cities'
      // add new prop to 'cities' with key as index 1 of 'cityPair' and val as an empty {}
    // for prop in 'cities' with key of 'cityPair' index 0, add new prop with key as 'cityPair' index 1 and val as 'cityPair' index 2 
    // for prop in 'cities' with key of 'cityPair' index 1, add new prop with key as 'cityPair' index 0 and val as 'cityPair' index 2    
  // return 'cities'

  arrayToObj: function arrayToObj(array) {
    let cities = {}
    for (let cityPair of array) {
      if (!cities[cityPair[0]]) { cities[cityPair[0]] = {}; }
      if (!cities[cityPair[1]]) { cities[cityPair[1]] = {}; }
      let city1 = cities[cityPair[0]];
      let city2 = cities[cityPair[1]];
      let distance = cityPair[2];
      
      city1[cityPair[1]] = distance;
      city2[cityPair[0]] = distance;
    }
    return cities;
  },


// Pseudocode for 'shortestRoute' (3 parameters: cityList, start, end)
  // if the 'start' and 'end' are the same, return the route as array with just 'start'
  // declare 'bestRoute' variable as an object with route and distance properties. init route as empty array and distance as positive infinity.
  // declare 'routeBuilder' function, which takes 4 parameters: route, distance, newStart, end
    
    // Pseudocode for 'routeBuilder'
      // declare 'tempRoute' variable, storing a copy of the 'route'
      // declare 'tempDistance' variable, storing the value of 'distance'
      // if the length of the 'tempRoute' is greater than 0 (if it's equal to 0, we'll leave the value of 'tempDistance' at 0)
        // increase 'tempDistance' by the distance traveled from previous city
      // extend 'tempRoute' with current city (newStart)
      // build out list of visited cities (to help prevent traveling to cities we've already been)
        // store key/value pairs of ("cityName":true) for each city in the route
      // Base Case 1.5
        // if current city (newStart) is equal to the 'end'
          // if current route's distance < best route's distance
            // replace data for the best route with data from current route
        // return out of function
      // iterate through each city in the 'newStart' object
      // if city has not been visited (This is base case 2 when there are no new cities to travel to)
        // recursively invoke 'routeBuilder' on each city,
      // return out of function
      
  // invoke 'routeBuilder', passing in: [], 0, start, end
  // return the best route
  
  shortestRoute: function shortestRoute(cityList, start, end) {
    if (start === end) {return [start]}
    let bestRoute = {
      route: [],
      distance: Infinity
    }  
    let routeBuilder = function(route, distance, newStart, end) {
      let tempRoute = route.slice();
      let tempDistance = distance;
      // if the length of the 'tempRoute' is greater than 0
      if (tempRoute.length > 0) {
        // increase 'tempDistance' by the distance traveled from previous city
        tempDistance = tempDistance + cityList[newStart][tempRoute[tempRoute.length-1]];
      }
      // extend 'tempRoute' with current city (newStart)
      tempRoute.push(newStart);
      // build out list of visited cities
      let visitedCities = {}
      for (let city of route) {
        visitedCities[city] = true;
      }
      
      // Base Case 1.5
      // if current city (newStart) is equal to the 'end'
      if (newStart === end) {
        // if current route's distance < best route's distance
        if (tempDistance < bestRoute.distance) {
          // replace data for the best route with data from current route
          bestRoute.route = tempRoute;
          bestRoute.distance = tempDistance;
        }
        return;
      }
      
      // iterate through each city in the 'newStart' object
      for (let city in cityList[newStart]) {
        // if city has not been visited (This is base case 2 when there are no cities we haven't yet been)
        if (!visitedCities[city]) {
          // recursively invoke 'routeBuilder' on each city,
          routeBuilder(tempRoute, tempDistance, city, end);
        }
      }
      return;
    }
    //====== End of innerFunc
    
    routeBuilder([], 0, start, end);
    return bestRoute.route;
  }
}

let cityObj = module.exports.arrayToObj(cities);
console.log( module.exports.shortestRoute(cityObj, startingCity, destination) );
