class Book {
    constructor(title, author, isRead) {
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }
}
const book1 = new Book('every where yo go', 'jhena Aiko', true);
const book2 = new Book('harry puter', 'uri malasa', true);
const book3 = new Book('The Dark Bones', 'Loreth Anne White', false);
let books = [ book1, book2, book3 ];

function printBook(obj) {
    console.log(`*${obj.title} by ${obj.author}`);
}
function notRead(obj) {
    let booksNotRead = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].isRead === false) {
            booksNotRead.push(books[i]);
        }
    }
    return booksNotRead;
}
printBook(book1);
notRead(books);
