//API
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
//initialize array 
const cities = [];
//use fetch to get retrieve data, parse data, and push into the array
fetch(endpoint)//returns a promise
  .then(dataBlob => dataBlob.json())//also a gd promise 
  .then(parsedData => cities.push(...parsedData));

//function that filters the searched keywords (wordtoMatch) from the cities array;
function findMatches(wordToMatch,cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

//find the "suggestions" class
const suggestions = document.querySelector('.suggestions');
//function that displays the filtered array in the DOM
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  //creates HTML markup
  const html = matchArray.map(place => {
    //find the typed letters - global, cainsensitive
    const regex  = new RegExp(this.value, 'gi');
    //put a highlited span into the city/state name
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = place.state.replace(regex,`<span class="hl">${this.value}</span>`)

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population}</span>
      </li>
    `;
  }).join(''); //join from array into useable single string 
  //loads it into the DOM
  suggestions.innerHTML = html;
}


const searchInput = document.querySelector('.search');
//run displayMatches function when change happens 
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
