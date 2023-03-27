const BASE_URL = 'http://localhost:3000';

function fetchBooks() {
    fetch(`${BASE_URL}/books`).then(response => response.json()).then(console.log);
}

function fetchBookById(bookId) {
    fetch(`${BASE_URL}/books/${bookId}`).then(response => response.json()).then(console.log);
}

fetchBooks();

fetchBookById(4);