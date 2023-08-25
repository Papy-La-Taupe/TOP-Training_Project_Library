const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
 
function updateDisplayedCards(){
    const displayGrid = document.getElementById('DisplayGrid');
    displayGrid.innerHTML = '';
}

function newCardsDisplay(){
    updateDisplayedCards();
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");

        const bookTitle = document.createElement("p");
        bookTitle.classList.add("bookTitle");
        bookTitle.textContent = `- ${myLibrary[i].title} -`;

        const bookAuthor = document.createElement("p");
        bookAuthor.classList.add("bookAuthor");
        bookAuthor.textContent = `Written by ${myLibrary[i].author}`;

        const bookPages = document.createElement("p");
        bookPages.classList.add("bookPages");
        bookPages.textContent = `${myLibrary[i].pages} Pages`

        const bookRead = document.createElement("p");
        bookRead.classList.add("bookRead");
        bookRead.textContent = myLibrary[i].read;

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);

        const displayGrid = document.getElementById("DisplayGrid");
        displayGrid.appendChild(bookCard);
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    newCardsDisplay();    
}

addBookToLibrary("testbook1", "joker", "23", "read");
addBookToLibrary("testbook2", "jokster", "85", "not read");