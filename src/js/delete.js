const BASE_URL = 'http://localhost:3000';


function deleteBook(bookId) {
    const options = {
        method: 'DELETE'
    }
    return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}

// deleteBook(8);
// deleteBook(6);