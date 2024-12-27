//maps, filter, sort, reduce, every, some, foreach

const numbers = [1, 2, 3, 4, 5, 6];
const alphabets = ["a", "b", "c", "d"];

//adding with maps
const testingMaps = numbers.map(function (number) {
  return number + 1;
});

//multiplying with maps
const testingMap = numbers.map(function (number) {
  return number * 2;
});

//finding the  index with maps
const forIndex = numbers.map(function (number, index) {
  return number, index;
});
console.log(forIndex);

//finding arrays with map
const forArray = numbers.map(function (number, index, arr) {
  return arr;
});
console.log(forArray);

console.log(numbers, testingMaps);
console.log(numbers, testingMap);

//changing from small letters to uppercase with maps
const bigLetters = alphabets.map(function (alphabet) {
  return alphabet.toLocaleUpperCase();
});
console.log(alphabets, bigLetters);

//concatting with maps
const concat = alphabets.map(function (alphabet) {
  return alphabet + "a";
});
console.log(alphabets, bigLetters);
console.log(concat);

//find method
const usingFind = numbers.find(function (number) {
  return number > 3;
});
console.log(usingFind);

//filter method
const usingFilter = numbers.filter(function (number) {
  return number > 3;
});
console.log(usingFind);
console.log(usingFilter);

const goodMovies = [
  { title: "titanic", rating: 10 },
  { title: "bad boys", rating: 2 },
  { title: "equalizers 3", rating: 8 },
  { title: "equalizers 1", rating: 16 },
  { title: "avengers", rating: 3 },
];

//using the filter to find good movies
const movieFilter = goodMovies.filter(function (movie) {
  return movie.rating < 5;
});
console.log(movieFilter);

// trying the every method
const EveryGoodRating = goodMovies.every(function (movie) {
  return movie.rating > 5;
});
console.log(EveryGoodRating);

//trying the some method
const someGoodRating = goodMovies.some(function (movie) {
  return movie.rating > 15;
});
console.log(someGoodRating);

const noOrder = ["z", "t", "p", "a", "k", "e"];
const withNumbers = [12, 55, 60, 63, 77, 99];

//sorting values using the sort method
const toSort = noOrder.sort();

console.log(toSort);

//testing to see if am array is sorted
function isSorted(value) {
  if (value <= 0) {
    return true;
  }

  for (let i = 0; i < value.length; i++) {
    if (value[i] > value[i + 1]) return false;
  }
  return true;
}
console.log(isSorted(withNumbers));
