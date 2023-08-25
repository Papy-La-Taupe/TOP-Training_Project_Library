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

        const deleteBook = document.createElement("button");
        deleteBook.classList.add("DeleteBook");
        deleteBook.id = `DeleteCardNumber${i}`;
        deleteBook.textContent = "x";

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

        bookCard.appendChild(deleteBook);
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

addEventListener("click",function(e){
    if(e.target.className === "DeleteBook"){
        const elementToDelete = e.target.id;
        const indexNumber = elementToDelete[elementToDelete.length-1];
        myLibrary.splice(indexNumber,1);
        newCardsDisplay()
    };  
});

const addBookButton = document.getElementById("AddBookButton");
const addBookDialog = document.getElementById("addBookDialog");
const addBookForm = document.querySelector("#addBookDialog form");
const addBook = document.getElementById("addBook");
const cancel = document.getElementById("cancel");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");
const notReadInput = document.getElementById("not-read");

addBookButton.addEventListener('click', function() {
    addBookDialog.showModal();
});

addBookForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const bookTitle = titleInput.value;
    const bookAuthor = authorInput.value;
    const bookPages = parseInt(pagesInput.value);
    const bookRead = readInput.checked ? "Read" : "Not read";

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);

    
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
    notReadInput.checked = false;

    addBookDialog.close();
});

cancel.addEventListener('click', function() {
    addBookDialog.close();
});
