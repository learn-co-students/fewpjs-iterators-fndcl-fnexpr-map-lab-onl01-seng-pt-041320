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

const titleCased = () => tutorials.map(tutorial =>
  tutorial.split(' ').map( // map applies to each word in tutorial element
    word => word[0].toUpperCase() + word.slice(1) // for EACH word in string, cap 1st letter and concat the rest of word
  ).join(' ')) // joins the split elements of words back into the string element in tutorial


