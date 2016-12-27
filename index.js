const names = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Use regular expression to strip out articles
function strip(name) {
  return name.replace(/^(a |the |an )/i, '').trim();
}

// long version
// const sortedNames = names.sort(function (a, b) {
  // if (strip(a) > strip(b)) {
  //   return 1;
  // } else {
  //   return -1;
  // }

  // Short version using arrow function and ternary operator
  const sortedNames = names.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#names').innerHTML =
  sortedNames
    .map(name => `<li>${name}</li>`)
    .join('');
