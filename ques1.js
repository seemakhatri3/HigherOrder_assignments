//question:1 Total Number of Pages:
//  Write a function getTotalPages that calculates and returns the total number of pages in the library.


const library = [
  
    { title: "The Great Gatsby", pages: 180 },
    { title: "To Kill a Mockingbird", pages: 281 },
    { title: "1984", pages: 328 },
    { title: "Pride and Prejudice", pages: 432 },

];

function getTotalPages(library) {
    const totalPages = library.reduce((total, book) => total + book.pages, 0);
    return totalPages;
}

const totalNumberOfPages = getTotalPages(library);
console.log("Total number of pages:", totalNumberOfPages);


// using the reduce method add total numbers of pages and return the totalNumberOfPages
