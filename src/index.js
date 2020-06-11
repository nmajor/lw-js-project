import { searchMovies, updateResultsList } from './movies';
import { initSortable } from './plugins/init_sortable'; // <-- add this
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select2';

initSortable();
initMarkdown();
initSelect2();

// Get the submit button element and store in a var
const submitButton = document.querySelector('#search-movies');

// Create the click listener on the submit button
submitButton.addEventListener('submit', updateResultsList);
