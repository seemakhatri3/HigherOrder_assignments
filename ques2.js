// question2 :List of Book Titles: 
//Write a function getBookTitles that returns an array containing only the titles of the books in the library.


const library = [
    { title: "The Great Gatsby", pages: 180 },
    { title: "To Kill a Mockingbird", pages: 281 },
    { title: "1984", pages: 328 },
    { title: "Pride and Prejudice", pages: 432 },

];

function getBookTitles(library) {
    const bookTitles = library.map(book => book.title);
    return bookTitles;
}

const bookTitles = getBookTitles(library);
console.log("List of book titles:", bookTitles);


// using the Map method return array of Title of the books in the library
