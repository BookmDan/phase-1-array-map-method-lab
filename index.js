const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1));
}

// function toTitleCase(sentence) {
//   const words = sentence.split(' ');
//   const capitalizeedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//   return capitalizedWords.join(' ');
// }

// function capitalizeEachWord(sentence) {
//   const words = sentence.split(' ');
//   const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//   return capitalizedWords.join(' ');
// }

// Function to convert all tutorial titles to title case using forEach


// function titleCased() {
//   const titleCasedTutorials = [];
//   tutorials.forEach((tutorial) => {
//     titleCasedTutorials.push(toTitleCase(tutorial));
//   });
//   return titleCasedTutorials;
// }


function titleCased() {
  return tutorials.map((tutorial) => toTitleCase(tutorial));
}


// function capitalizeEachWord(sentence) {
//   const words = sentence.split(' ');
//   const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//   return capitalizedWords.join(' ');
// }

// const sentence = "What Is The Difference Between StopPropagation And PreventDefault?";
// const capitalizedSentence = capitalizeEachWord(sentence);
// console.log(capitalizedSentence); // Output: "What Is The Difference Between StopPropagation And PreventDefault?"
