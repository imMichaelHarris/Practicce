const cityData = [
  { city: "Seattle", state: "WA", population: 652405, land_area: 83.9 },
  { city: "New York", state: "NY", population: 8405837, land_area: 302.6 },
  { city: "Boston", state: "MA", population: 645966, land_area: 48.3 },
  { city: "Kansas City", state: "MO", population: 467007, land_area: 315 }
];

// Return list of cities
//  Simple For Loop
const cities = [];
for (let i = 0; i < cityData.length; i++) {
  cities.push(cityData[i].city);
}
console.log(cities);

/* Remember higher order functions like map, filter, and reduce will 
    return a new array so we can capture what that new array will be in a variable.
    They take in callback functions as parameters
*/
const citiesMap = cityData.map(function(oneItemInArray) {
  return oneItemInArray.city;
});
console.log("citiesMap", citiesMap);

///////////////////////////////////////////////////////////////////////////////

function callback(oneItemInArray) {
  return oneItemInArray.city;
}
// Here we seperated the function from map to better 
// demonstrate that map is going to run that callback function on every item in the array
const citiesMapTwo = cityData.map(callback);
console.log("citiesMapTwo", citiesMapTwo);



// With filter you provide it a callback function and it will return that item into the array
// if the return statement results to true

const largePop = cityData.filter(function(city){
    return city.population >= 600000; 
    //Here we say return the current item only if the population is greater than or equal to 600000
})

console.log(largePop);


///////////////////////////////////////////////////////////////////////////////////////////
const numbers = [4, 3, 12, 56, 83, 766, 98, 2569, 34, 78, 368, 9341];

// With reduce it takes two arguements. First being the callback function which will have
// two parameters which will be the accumulator and the second the current item in the array.
// The second value that goes into reduce is the initial value of the accumulator. 
const total = numbers.reduce(function(acc, currentValue) {
  return (acc += currentValue);
}, 0);
// Here we are saying that the initial value of the accumulator will be 0 so every time
// the function is run it's going to add that accumulator value to the current item and now the accumulator
// has changed

console.log(total);

