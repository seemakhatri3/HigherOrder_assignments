//Longest Book: 
//Write a function getLongestBook that returns the title of the book with the most pages.
const library = [
    { title: "The Great Gatsby", pages: 180 },
    { title: "To Kill a Mockingbird", pages: 281 },
    { title: "1984", pages: 328 },
    { title: "Pride and Prejudice", pages: 432 },

];

function getLongestBook(library) {
    const longestBook = library.reduce((longest, book) => {
        if (book.pages > longest.pages) {
            return book;
        } else {
            return longest;
        }
    }, library[0]);

    return longestBook.title;
}

const longestBookTitle = getLongestBook(library);
console.log("Title of the longest book:", longestBookTitle);

 //Each book in the library array and compare the number of pages of each book to find the book with the most pages.
 //The initial value for the accumulator is the first book in the array.
 //The function returns the title of the book with the most pages.