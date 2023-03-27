const BASE_URL = 'http://localhost:3000';

const newBook = 
{
    "title": "Книга тест 2",
    "author": "user",
    "rating": 2,
}



function addBook(book) {
    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
}

return fetch(`${BASE_URL}/books`, options).then(res => res.json())
}


// addBook(newBook).then(book => {
//     console.log("Ретур в функції повертає проміс, тому після виклику функції можна малювати дані отримані в промісі. Сюди також можна передати колбеком функцію для рендеру html. (приклад нижче). Відловлювати помилки треба вкінці ланцюга промісів, тому Catch буде за рендером.");
//     console.log(book)
// }).catch(error => console.log(error));
// ==================================================================
// // addBook(newBook).then(renderBook(book).catch(error => console.log(error));

// function renderBook(book) {
    //     console.log("Ретур в функції повертає проміс, тому після виклику функції можна малювати дані отримані в промісі. Сюди також можна передати колбеком функцію для рендеру html. (приклад нижче)");
//     console.log(book)
// }