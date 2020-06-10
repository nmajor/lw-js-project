

const searchPlaces = (inputValue) => {
  const url = "https://places-dsn.algolia.net/1/places/query";
  fetch(url, {
    method: "POST",
    body: JSON.stringify({ query: inputValue }),
  })
    .then(response => response.json())
    .then((result) => {
      console.log("places result", result);
    });
};

// Get the search input html element
const input = document.querySelector("#search");

//
input.addEventListener("keyup", (evt) => {
  // Get the element again
  const input = document.querySelector("#search");

  searchPlaces(input.value);
});


// console.log("Hello from src/index.js!");

// // Functions in javascript
function hello() {};

const hello = () => {gi};

const hello = greeting => console.log(greeting);
const hello = (greeting) => { return console.log(greeting); }

// // Ruby = synchronous
// // Javascript = asynchronous

// // Poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
// // Title: "Star Wars: Episode IV - A New Hope"
// // Type: "movie"
// // Year: "1977"
// // imdbID: "tt0076759"

// const searchMovies = (query) => {
//   const url = `http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`;
//   fetch(url)
//     .then(response => response.json())
//     .then((result) => {
//       // Outputting the result to the console
//       console.log(result);

//       // Getting the <ul> element from the html page
//       // Later will will add <li> elements to the <ul>
//       const resultList = document.querySelector('#results');

//       // Clear out existing html
//       resultList.innerHTML = "";


//       // Loop through the result.Search array
//       // We saw that result.Search has the data we want
//       // From looking at the console.log(result) above
//       result.Search.forEach((movie) => {
//         // Create a new html string
//         const newItem = `<li class="list-inline-item">
//         <img src="${movie.Poster}" alt="">
//         <p>${movie.Title}</p>
// 			</li>`;

//         // Insert newItem into the <ul> element
//         resultList.insertAdjacentHTML("beforeend", newItem);
//       });
//     });
// };

// // Get the submit button element and store in a var
// const submitButton = document.querySelector('#search-movies input[type="submit"]');

// // Create the click listener on the submit button
// submitButton.addEventListener('click', (evt) => {
//   // Prevent default form submit behavior
//   evt.preventDefault();

//   // Get the text input element
//   const queryInput = document.querySelector('#keyword');

//   // Get the value of the text input element
//   const query = queryInput.value;

//   // Call our search movies function with the query that the user typed.
//   searchMovies(query);
// });
