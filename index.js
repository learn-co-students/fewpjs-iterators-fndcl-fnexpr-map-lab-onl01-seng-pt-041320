const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let str = tutorials.map(function(word){
    return word.split(' ');
  })
  return str.map(function(word){
    return word.map(function(title_cased){
      return title_cased[0].toUpperCase() + title_cased.slice(1);
    }).join(' ');
  })
}

console.log(titleCased());