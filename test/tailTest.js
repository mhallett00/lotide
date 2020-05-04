const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TEST CODE
//checking resulting array
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); //checking resulting array is the required number of elements
assertEqual(result[0], "Lighthouse"); //checking first element is now "Lighthouse"
assertEqual(result[1], "Labs"); //checking second element is now "Labs"

//checking initial array
const words = ["Yo Yo", "Ligthouse", "Labs"];
tail(words); //calling the function
assertEqual(words.length, 3); //shows inital arrays still has 3 elements

//checking single element array returns empty tail
const result2 = tail(["Hello"]);
assertEqual(result2.length, 0); //shows resulting array has no elements

//checking an empty array yields empty array
const result3 = tail([]);
assertEqual(result3.length, 0); //shows resulting array has no elements