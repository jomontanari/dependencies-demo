var MyLibrary = {};

MyLibrary.BookShelf = function() {

    var books = [];

    this.addBook = function (isbn) {
        books.push(new MyLibrary.Book(isbn));
    }

    this.findBooksBy = function (author) {
        var i,
            matchingBooks = [];

        for(i=0; i<books.length; i++) {
            var book = books[i];
            if (book.isWrittenBy(author)) {
                matchingBooks.push(books)
            }
        }

        return matchingBooks;
    }

};

MyLibrary.Book = function(isbn) {
    var _title;
    var _author;
    var _isbn = isbn;

    this.isWrittenBy = function(author) {
        return author == _author;
    }

    var init = function() {
        $.getJSON("/BookDetails?isbn=" + _isbn, function(data) {
            _author = data.author;
            _title = data.title;
        });
    };

    init();
};