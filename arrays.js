var greetings = ["Hi", "Hello", "Hola", "Yo"];
var areaCodes = [719, 303, 720];
var fakeNews = [true, false, 0, 2>1];

// The .length method will count the number of elements in the array and return that number. //
console.log(greetings.length);

//The .indexOf method will search through an array for a given paramenter (303 in this case) and return the index position of that element in the array. //
console.log(areaCodes.indexOf(303));

// The .slice method will create a new array based on the stop and start elements (as applicable) indicated by the index positions typed in as parameters. //
console.log(fakeNews.slice(0,2));

// Because computers do all of their calculations with binary code (0s and 1s), they begin counting from 0. Therefore the index positions in arrays follows suit - counting begins at one.//
// This allows each index position in an array to be referenced with a numerical value based on the number of its index position, instead of having to rely on its actual value. //
// which, as we've seen, is subject to change.//
