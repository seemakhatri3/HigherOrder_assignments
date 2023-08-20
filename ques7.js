//Total Number of Pages by Author:
//Write a function getTotalPagesByAuthor that returns an object where the keys are author names and the values are the total number of pages of books written by each author

const library = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
    { title: "1984", author: "George Orwell", pages: 328 },
    { title: "Pride and Prejudice", author: "Jane Austen", pages: 432 },

];

function getTotalPagesByAuthor(library) {
    const totalPagesByAuthor = library.reduce((result, book) => {
        if (!result[book.author]) {
            result[book.author] = 0;
        }
        result[book.author] += book.pages;
        return result;
    }, {});

    return totalPagesByAuthor;
}

const totalPagesByAuthor = getTotalPagesByAuthor(library);
console.log("Total pages by author:", totalPagesByAuthor);

//It creates an object(totalPagesByAuthor) where each author's name is a key. 
//If an author's name is not already a key in the object,
  //  the total pages are initialized to 0.
    // The total pages of books by the same author are then accumulated.