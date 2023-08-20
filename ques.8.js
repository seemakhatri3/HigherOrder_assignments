//Advanced: Filter and Map: 
//Write a function getShortestBookByAuthor that returns an object where the keys are author names and the values are the titles of the shortest book written by each author.

const library = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
    { title: "1984", author: "George Orwell", pages: 328 },
    { title: "Pride and Prejudice", author: "Jane Austen", pages: 432 },
   
];

function getShortestBookByAuthor(library) {
    const shortestBookByAuthor = library.reduce((result, book) => {
        if (!result[book.author] || book.pages < result[book.author].pages) {
            result[book.author] = book;
        }
        return result;
    }, {});

    const shortestTitlesByAuthor = {};
    for (const author in shortestBookByAuthor) {
        shortestTitlesByAuthor[author] = shortestBookByAuthor[author].title;
    }

    return shortestTitlesByAuthor;
}

const shortestBookTitlesByAuthor = getShortestBookByAuthor(library);
console.log("Shortest book by author:", shortestBookTitlesByAuthor);



// It creates an object (shortestBookByAuthor) where each author's name is a key, and the value is the book object with the shortest page count.
//The final result is an object with author names as keys and the titles of their shortest books as va//lues.