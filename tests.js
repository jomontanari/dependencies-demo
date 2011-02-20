describe("Bookshelf", function() {

    it("should find all the books by a given author", function() {

        MyLibrary.Book = function() {
            this.isWrittenBy = function() {return true;}
        };

        var shelf = new MyLibrary.BookShelf();
        shelf.addBook("1234");

        var books = shelf.findBooksBy("somebody");

        expect(books.length).toBe(1);

    });

});

describe("Book", function() {

    it("should return false if the author does not match", function() {

        $.getJSON = function(url, callback) {
            callback({ author: "Jo Cranford", title: "Post Post Technical" });
        }

        var myBook = new MyLibrary.Book("1234")

        expect(myBook.isWrittenBy("Not Jo Cranford")).toBe(false);
    });

});