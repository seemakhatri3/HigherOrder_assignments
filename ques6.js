//Authors and Their Books:
// Write a function getAuthorsAndBooks that returns an object where the keys are author names and the values are arrays of book titles written by each author.
const library = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Pride and Prejudice", author: "Jane Austen"},

];

function getAuthorsAndBooks(library) {
    const authorsAndBooks = library.reduce((result, book) => {
        if (!result[book.author]) {
            result[book.author] = [];
        }
        result[book.author].push(book.title);
        return result;
    }, {});

    return authorsAndBooks;
}

const authorsAndBooks = getAuthorsAndBooks(library);
console.log("Authors and their books:", authorsAndBooks);


//If an author's name is not already a key in the object, a new array is created as the value. 
//Book titles by the same author are then pushed into the corresponding array.