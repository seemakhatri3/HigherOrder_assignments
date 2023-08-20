//Average Number of Pages:
//Write a function getAveragePages that calculates and returns the average number of pages across all books in the library

const library = [
    { title: "The Great Gatsby", pages: 180 },
    { title: "To Kill a Mockingbird", pages: 281 },
    { title: "1984", pages: 328 },
    { title: "Pride and Prejudice", pages: 432 },

];

function getAveragePages(library) {
    const totalNumberOfPages = library.reduce((total, book) => total + book.pages, 0);
    const averagePages = totalNumberOfPages / library.length;
    return averagePages;
}

const averageNumberOfPages = getAveragePages(library);
console.log("Average number of pages:", averageNumberOfPages);


//uses the reduce higher-order function to calculate the total number of pages across all books in the library array.
//Then, it divides the total number of pages by the number of books to get the average number of pages per book.