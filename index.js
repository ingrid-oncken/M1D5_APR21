
/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
let test = `When one door closes another door opens.  - Alexander Graham Bell`;

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
let sum = 10 + 20;

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
console.log("----------EXERCISE C----------");

let random = Math.floor(Math.random() * 20); //using Math.floor I'll always get an integer number
console.log(random);

console.log("-----------------------------\n\n");

/* Ex.Dc
    Create a variable called "me" and assign to it an object containing the following information: 
    name = your name, surname = your surname, age = your age.
*/
console.log("----------EXERCISE D----------");

let me = {
  name: `Ingrid`,
  surname: `Oncken`,
  age: 34,
};
console.log(me);

console.log("-----------------------------\n\n");
/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
console.log("----------EXERCISE E----------");

console.log(me); //the whole me object
delete me[`age`];
console.log(me); //the me object without age property

console.log("-----------------------------\n\n");

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
console.log("----------EXERCISE F----------");

console.log(me); //the me object without age property
me[`skills`] = [`javascrip`, `CSS`, `HTML`];
console.log(me); //the me object with the array skills as added property

console.log("-----------------------------\n\n");

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
console.log("----------EXERCISE G----------");

console.log(me); //the me object
delete me[`skills`][2]; //WHY IT PRINTS [2] AS AN EMPTY ITEM???
console.log(me);

console.log("-----------------------------\n\n");

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
console.log("----------EXERCISE JS 1------");
//This is what I came up with
/* const dice2 = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min); //this is providing me a random integer between a and b, so 0 and 20
};

let diceVar = dice2(1, 6);
console.log(diceVar); */

const dice = function () {
  return Math.floor(Math.random() * 6 + 1);
};
console.log(dice());
console.log(dice());
console.log(dice());

console.log("-----------------------------\n\n");

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
console.log("----------EXERCISE JS 2------");

const whoIsBigger = function (n1, n2) {
  return n1 - n2 > 0 ? n1 : n2;
};

let wib = whoIsBigger(13, 8);
console.log(wib);

console.log("-----------------------------\n\n");

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter 
    and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
console.log("----------EXERCISE 3----------");

/* let quote1 = `Discipline yourself, and others won't need to. - John Wooden`;
 */
const splitMe = function (quote1) {
  return quote1.split();
};

console.log(
  splitMe(`Discipline yourself, and others won't need to. - John Wooden`)
);

console.log("-----------------------------\n\n");

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. 
    If the boolean value is true it should return the string without the first letter, 
    otherwise it should remove the last one from it.
*/
console.log("----------EXERCISE 4----------");

const deleteOne = function (string4, bool4) {
  return bool4 === true ? string4.substring(1) : string4.slice(0, -1);
  // .substring(1) will cut out the leter position 0 and will return from the position (1) on
  //.slice(0, -1) won't cut ou any letter in the begining of the word, position (0), but will cut -1 letter on the end
};

let doF = deleteOne(`Pluviophile`, false);
console.log(doF);

console.log("-----------------------------\n\n");

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
console.log("----------EXERCISE 5----------");

//Using the regExp aproach
const onlyLetters = function (string5) {
  return string5.replace(/\d/g, ""); // /\d/ is equivalent to /[0-9]/
};

console.log(
  onlyLetters(
    `On September 7, 1822, Prince Dom Pedro declared Brazil's independence from Portugal`
  )
);

//Diego's approach saw on the Homework Walkthrough
//we need to check if a specific string is a letter or number, for that we can invoque the function isNaN, then run a loop into the string

function onlyLetters2(str5) {
  let result = "";
  for (let i = 0; i < str5.length; i++) {
    //here, for each letter we will be checking is it is a number or not
    let currentLetter = str5[i];
    if (isNaN(currentLetter)) result += currentLetter; //then, if it is not a number we will return the string to result, += will add the current string to the previous ones
  }
  return result;
}
console.log(
  `This is the homework walkingthrough: ` +
    onlyLetters2(`ab1cd2ef3gh4ij5kl6mn7op8qr0`)
);

console.log("-----------------------------\n\n");

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
console.log("----------EXERCISE 6----------");

const isThisAnEmail = function (string6) {
  return /[@.]/.test(string6);

  //The regular expression /[@.]/ will check if within my string6 there is an @ and a . to check if it's an email
  //The .test method is aplyes with a regexp and return a boolean
};

//above I'll using Diego's approach that don't use regExp

const isThisAnEmail2 = function (email) {
  return email.indexOf(`@`) > 0 && email.indexOf(`.`) > 0; //indexOf returns the index of the element, if it is found in the array/String, or -1 if it's not found in the string
};

console.log(`Is this an email? ` + isThisAnEmail(`ingrid.oncken@gmail.com`));
console.log(
  `Is this email, Diego's resolution ` + isThisAnEmail2(`thisIsNotEmail.com`)
);

console.log("-----------------------------\n\n");

//Bellow pseudocode from classemates to study later
/* let email = "emiliankasemi@gmail.com";

const isThisAnEmail = function (string) {
  // if email adress is valid, return true
  if (string === email) {
    console.log("The email is valid");
  } else if (string !== email) {
    console.log("The email is not valid");
  }
};

console.log(isThisAnEmail("emiliankasemi@gmail.com")); */

/* const isThisAnEmail = function(str) {
  let parts = str.split('@')
  if(parts.length===2) {
    let domainParts = parts[1].split('.')
    if(domainParts.length >= 2) {
      return true 
    }
  }
  return false */

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
console.log("----------EXERCISE 7----------");

const whatDayIsIt = function () {
  let dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayOfWeek[new Date().getDay()];
  /* I have comment the bllow information because I found out that I can simply return directly  the dayOfWeek 
  without having to store in into a variable
  let todayIs = dayToday.getDay();
  return dayOfWeek[todayIs]; */
};
/* const day = new Date(); */
console.log(`Today is ` + whatDayIsIt());

console.log("-----------------------------\n\n");
/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
console.log("----------EXERCISE 8 ----------");

const rollTheDices = function (numberOfDices) {
  let result = {
    //Creating an object with sum property AND values array = both empty
    sum: 0,
    values: [],
  };
  for (let i = 0; i < numberOfDices; i++) {
    let diceRoll = dice(); //Calling the function created on exercise 1, then storing in diceRoll variable
    result[`sum`] += diceRoll; //adding the i randon number to the sum property in the result object
    result[`values`].push(diceRoll); //pushiing the i element to the array inside the object result
  }
  return result;
};
console.log(rollTheDices(10));
console.log(rollTheDices(7));
console.log(rollTheDices(4));

console.log("-----------------------------\n\n");

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter 
   and should return the number of days passed since that date.

*/
console.log("----------EXERCISE 9----------");
const howManyDays = function (date) {
  return (new Date() - date) / (1000 * 60 * 60 * 24);
  // divide by 1000 to transform from miliseconds to seconds,
  //then * 60 that are the seconds in one minute,
  //*60 to get into 1 hor, * 24 hours in one day
};

console.log(howManyDays(new Date(1986, 6, 3)));

console.log("-----------------------------\n\n");

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
console.log("----------EXERCISE 10----------");

const isTodayMyBirthday = function () {
  /* let day = new Date().getDate(); //this is getting the day today and storing in the variable day
  let month = new Date().getMonth(); //this is getting this month and storing in the variable month */
  return new Date().getDate() === 3 && new Date().getMonth() === 6; //this line is comparing the actual day/month to my birthday day/month, and returning true or false
};

console.log(`Is today my birthday? ` + isTodayMyBirthday());

console.log("------------------------------\n\n");

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];


/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, 
   and returns the given object after deleting its property named as the given string.
*/
console.log("----------EXERCISE 11----------");

let flower = {
  color: `pink`,
  shape: `circle`,
  aroma: `rose`,
};

const deleteProp = function (objec11, prop11) {
  delete objec11[prop11];
  return objec11;
};
console.log(deleteProp(flower, `shape`));

console.log("-----------------------------\n\n");

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
console.log("----------EXERCISE 12----------");

const olderMovie = function () {
  let arrayOfYears = []; // empty array will be filled with the years of the movies
  for (let i = 0; i < movies.length; i++) {
    arrayOfYears.push(movies[i][`Year`]); //this loop is getting the movies years and    
  }
  return Math.min(...arrayOfYears); // the ...array is an spread operator and allows us to insert an array into the method math.min that would only accept  values like (1, 2, 3,)
};
console.log(`The year of the oldest movie is: ` + olderMovie());

console.log("-------------------------------\n\n");
/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
console.log("----------EXERCISE ----------");

console.log("-----------------------------\n\n");
/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
console.log("----------EXERCISE ----------");

console.log("-----------------------------\n\n");
/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
console.log("----------EXERCISE ----------");

console.log("-----------------------------\n\n");
/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
console.log("----------EXERCISE ----------");

console.log("-----------------------------\n\n");
/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
console.log("----------EXERCISE ----------");

console.log("-----------------------------\n\n");
/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
console.log("----------EXERCISE ----------");

console.log("-----------------------------\n\n");
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
console.log("----------EXERCISE ----------");

console.log("-----------------------------\n\n");
/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
console.log("----------EXERCISE ----------");

console.log("-----------------------------\n\n");
// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* This movies array is used throughout the exercises. Please don't change it :)  */
