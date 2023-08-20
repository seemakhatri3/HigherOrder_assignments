// questio3:Books Published After a Given Year:
// Write a function getBooksPublishedAfterYear(year) that takes a year as a parameter and returns an array containing the titles of books published after that year

const library = [
    { title: "The Great Gatsby", year: 1925 },
    { title: "To Kill a Mockingbird", year: 1960 },
    { title: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", year: 1813 },

];

function getBooksPublishedAfterYear(library, year) {
    const booksPublishedAfterYear = library.filter(book => book.year > year);
    const bookTitles = booksPublishedAfterYear.map(book => book.title);
    return bookTitles;
}

const yearToCheck = 1955;
const booksPublishedAfterYear = getBooksPublishedAfterYear(library, yearToCheck);
console.log("Books published after", yearToCheck, ":", booksPublishedAfterYear);


 //The books that were published after the given year.Then, the map function is used to extract the titles from these filtered book objects.
