const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);

  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");

  const bookTitle = document.createElement("p");
  bookTitle.classList.add("bookTitle");
  bookTitle.textContent = `- ${newBook.title} -`;

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("bookAuthor");
  bookAuthor.textContent = `Written by ${newBook.author}`;

  const bookPages = document.createElement("p");
  bookPages.classList.add("bookPages");
  bookPages.textContent = `${newBook.pages} Pages`

  const bookRead = document.createElement("p");
  bookRead.classList.add("bookRead");
  bookRead.textContent = newBook.read;

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);

  const displayGrid = document.getElementById("DisplayGrid");
  displayGrid.appendChild(bookCard);

  myLibrary.push(newBook);
}


  