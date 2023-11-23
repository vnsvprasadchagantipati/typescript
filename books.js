var Book = /** @class */ (function () {
    function Book(isbn, bookName, bookTitle, bookAuthor, quantityOfBooks, bookPrice) {
        this.isbn = isbn;
        this.bookName = bookName;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.quantityOfBooks = quantityOfBooks;
        this.bookPrice = bookPrice;
    }
    Book.prototype.displayDetails = function () {
        console.log("ISBN: ".concat(this.isbn));
        console.log("Book Name: ".concat(this.bookName));
        console.log("Book Title: ".concat(this.bookTitle));
        console.log("Book Author: ".concat(this.bookAuthor));
        console.log("Quantity Available: ".concat(this.quantityOfBooks));
        console.log("Price per Book: ".concat(this.bookPrice));
    };
    Book.prototype.calculateBill = function (quantityToPurchase) {
        if (quantityToPurchase > this.quantityOfBooks) {
            console.log("Sorry, the required quantity is not available.");
            return null;
        }
        var totalAmount = quantityToPurchase * this.bookPrice;
        console.log("Total Bill Amount: $".concat(totalAmount));
        return totalAmount;
    };
    return Book;
}());
// Example usage:
var book1 = new Book("978-3-16-1234456-0", "C# Programming", "Learning C#", "John Doe", 50, 500.00);
book1.displayDetails();
var quantityToBuy = 1;
book1.calculateBill(quantityToBuy);
