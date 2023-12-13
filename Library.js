// Advanced Library Management System
// Book Class
// Properties:

// isbn: unique id
// title: book title
// author: author of the book
// publishedYear: year the book was published
// Methods:

class Book {
  constructor(isbn, title, author, genre, publishedYear) {
    this.isbn = isbn
    this.title = title
    this.author = author
    // genre: genre of the book (e.g., fiction, non-fiction, sci-fi, etc.)
    this.genre = genre
    this.publishedYear = publishedYear
    // ratings: an array of ratings given by users, each rating is an object { userId, rating } where rating is a number between 1 and 5
    this.ratings = []
  }
  // averageRating(): returns the average rating of the book
  averageRating() {
    let sumrating = this.ratings.reduce(
      (total, rating) => total + rating.ratings,
      0
    )
    return sumrating / this.ratings.length
  }
  // rateBook(userId, rating): allows a user to rate the book, or update their rating if they've already rated it
  rateBook(userId, rating) {
    const existingRating = this.ratings.find((r) => r.userId === userId)

    if (existingRating) {
      existingRating.rating = rating // Update the existing rating
    } else {
      this.ratings.push({ userId, rating }) // Add a new rating
    }
  }
}
// LibraryManagement Function
// Properties:

function LibraryManagement() {
  // books: stores all books in an array
  let books = []

  let id = 1
  // addBook(title, author, genre, publishedYear): adds a new book to the end of the books array, auto-generates an isbn, and returns the new book object
  function addBook(title, author, genre, publishedYear) {
    return books.push(new Book(id++, title, author, genre, publishedYear))
  }
  // findBooksByAuthor(authorName): returns an array of books written by the given author
  function findBooksByAuthor(authorName) {
    return books.filter((book) => book.author === authorName)
  }
  // findBooksByGenre(genre): returns an array of books from a particular genre
  function findBooksByGenre(genre) {
    return books.filter((book) => book.genre === genre)
  }
  // topRatedBooks(n): returns the top 'n' books sorted by their average ratings
  function topRatedBooks(n) {
    let bookn = books
      .slice()
      .sort((a, b) => a.averageRating() - b.averageRating())
    return bookn.slice(0, n)
  }
  // recentlyPublished(): returns books published in the last 5 years, sorted by their published year
  function recentlyPublished() {
    const currentYear = new Date().getFullYear()
    return books.filter((books) => currentYear - books.publishedYear < 5)
  }

  return {
    addBook,
    findBooksByAuthor,
    findBooksByGenre,
    topRatedBooks,
    recentlyPublished,
    books,
  }
}
const library = new LibraryManagement()
library.addBook('The Alchemist', 'Paulo Coelho', 'Adventure', 1988)
library.addBook('Harry Potter', 'J.K. Rowling', 'Fantasy', 1997)
library.addBook('The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy', 1954)
library.addBook('The Little Prince', 'Antoine de Saint-Exupery', 'Novel', 1943)
library.addBook('A Tale of Two Cities', 'Charles Dickens', 'Historical', 1859)
library.addBook('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 1937)
library.addBook('Le Petit Prince', 'Antoine de Saint-Exupery', 'Novel', 1943)

library.books[0].rateBook(3, 5)
library.books[1].rateBook(3, 5)
library.books[2].rateBook(1, 4)
console.log(library.topRatedBooks(5))
