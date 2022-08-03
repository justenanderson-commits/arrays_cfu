var greetings = ["Hi", "Hello", "Hola", "Yo"];
var areaCodes = [719, 303, 720];
var fakeNews = [true, false, 0, 2>1];

// The .length method will count the number of elements in the array and return that number. //
console.log(greetings.length);

//The .indexOf method will search through an array for a given paramenter (303 in this case) and return the index position of that element in the array. //
console.log(areaCodes.indexOf(303));

// The .slice method will create a new array based on the stop and start elements (as applicable) indicated by the index positions typed in as parameters. //
console.log(fakeNews.slice(0,2));
