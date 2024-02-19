const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
  'Apple',
  'Apricot',
  'Avocado 🥑',
  'Banana',
  'Bilberry',
  'Blackberry',
  'Blackcurrant',
  'Blueberry',
  'Boysenberry',
  'Currant',
  'Cherry',
  'Coconut',
  'Cranberry',
  'Cucumber',
  'Custard apple',
  'Damson',
  'Date',
  'Dragonfruit',
  'Durian',
  'Elderberry',
  'Feijoa',
  'Fig',
  'Gooseberry',
  'Grape',
  'Raisin',
  'Grapefruit',
  'Guava',
  'Honeyberry',
  'Huckleberry',
  'Jabuticaba',
  'Jackfruit',
  'Jambul',
  'Juniper berry',
  'Kiwifruit',
  'Kumquat',
  'Lemon',
  'Lime',
  'Loquat',
  'Longan',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Marionberry',
  'Melon',
  'Cantaloupe',
  'Honeydew',
  'Watermelon',
  'Miracle fruit',
  'Mulberry',
  'Nectarine',
  'Nance',
  'Olive',
  'Orange',
  'Clementine',
  'Mandarine',
  'Tangerine',
  'Papaya',
  'Passionfruit',
  'Peach',
  'Pear',
  'Persimmon',
  'Plantain',
  'Plum',
  'Pineapple',
  'Pomegranate',
  'Pomelo',
  'Quince',
  'Raspberry',
  'Salmonberry',
  'Rambutan',
  'Redcurrant',
  'Salak',
  'Satsuma',
  'Soursop',
  'Star fruit',
  'Strawberry',
  'Tamarillo',
  'Tamarind',
  'Yuzu',
];

function search(str) {
  // to get array of suggestions
  let results = fruit.filter((fruitName) =>
    fruitName.toLowerCase().includes(str)
  );
  return results;
}

function searchHandler(e) {
  // to get the value from the input bar
  const searchedWord = e.target.value;
  // to not display dropdown if input box is empty
  if (!searchedWord) {
    suggestions.innerHTML = '';
    suggestions.classList.remove('longer-list');
  } else {
    // to reveal suggestions/autocomplete
    showSuggestions(search(searchedWord.toLowerCase()), searchedWord);
  }
}

function showSuggestions(results, inputVal) {
  // to reset dropdown each time something is typed
  suggestions.innerHTML = '';
  // if suggestions list is too long, add scrollbar
  if (results.length >= 5) {
    suggestions.classList.add('longer-list');
  }
  // to add suggestions to page
  results.forEach((fruit) => {
    const li = document.createElement('li');
    li.innerText = fruit;
    suggestions.appendChild(li);
  });
}

function useSuggestion(e) {
  // to add selected to the input box
  input.value = e.target.innerText;
  suggestions.innerHTML = '';
  suggestions.classList.remove('longer-list');
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
