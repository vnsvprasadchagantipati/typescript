class Book {
    public isbn: string;
    public bookName: string;
    public bookTitle: string;
    public bookAuthor: string;
    public quantityOfBooks: number;
    public bookPrice: number;
    constructor(isbn: string, bookName: string, bookTitle: string, bookAuthor: string, quantityOfBooks: number, bookPrice: number) {
        this.isbn = isbn;
        this.bookName = bookName;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.quantityOfBooks = quantityOfBooks;
        this.bookPrice = bookPrice;
    }
     displayDetails(): void {
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Book Name: ${this.bookName}`);
        console.log(`Book Title: ${this.bookTitle}`);
        console.log(`Book Author: ${this.bookAuthor}`);
        console.log(`Quantity Available: ${this.quantityOfBooks}`);
        console.log(`Price per Book: ${this.bookPrice}`);
    }

    calculateBill(quantityToPurchase: number): number | null {
        if (quantityToPurchase > this.quantityOfBooks) {
            console.log("Sorry, the required quantity is not available.");
            return null;
        }
        const totalAmount: number = quantityToPurchase * this.bookPrice;
        console.log(`Total Bill Amount: $${totalAmount}`);
        return totalAmount;
    }
}

// Example usage:
const book1: Book = new Book("978-3-16-1234456-0", "C# Programming", "Learning C#", "Rajesh", 50, 500.00);
book1.displayDetails();

const quantityToBuy: number = 1;
book1.calculateBill(quantityToBuy);


