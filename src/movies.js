const searchMovies = (query) => {
  const url = `http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((result) => insertMovies(result));
};

const insertMovies = (result) => {
  // Getting the <ul> element from the html page
  // Later will will add <li> elements to the <ul>
  const resultList = document.querySelector('#results');

  // Clear out existing html
  resultList.innerHTML = "";

  // Loop through the result.Search array
  // We saw that result.Search has the data we want
  // From looking at the console.log(result) above
  result.Search.forEach((movie) => {
    // Create a new html string
    const newItem = `<li class="list-inline-item">
        <img src="${movie.Poster}" alt="">
        <p>${movie.Title}</p>
      </li>`;

    // Insert newItem into the <ul> element
    resultList.insertAdjacentHTML("beforeend", newItem);
  });
}

const updateResultsList = (evt) => {
  // Prevent default form submit behavior
  evt.preventDefault();

  // Get the text input element
  const queryInput = document.querySelector('#keyword');

  // Get the value of the text input element
  const query = queryInput.value;

  // Call our search movies function with the query that the user typed.
  searchMovies(query);
}

export { searchMovies, updateResultsList };