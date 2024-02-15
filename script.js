const myLibrary = [];
const library = document.querySelector('.library');
const newBook = document.getElementById('new');
const dialog  = document.querySelector('dialog');
const form = document.querySelector('form');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = function() {
    return this.read = read ? "Read" : "Not Read" }
    this.readStatus()
    addBookToLibrary(this);

  }


function addBookToLibrary(object) {
   myLibrary.push(object)
}

function createCard() {
    let div = document.createElement('div');
    let button = document.createElement('button');

    library.appendChild(div);

    for (let i = 0; i < 3; i++) { 
      let para  = document.createElement('p');
      div.appendChild(para)
    }

    div.appendChild(button);
}

let pompeji = new Book("Pompeji", "Robert Harris", 279, false);
let book = new Book("Booktitle", "Max Mustermann", 385, false)


function displayBooks(array) {
  array = myLibrary;

  for (let i of array) {
    createCard();
    let card = document.querySelectorAll('.library div:last-child p');
    let button = document.querySelector('.library div:last-child button');
    card[0].textContent = i.title;
    card[1].textContent = i.author;
    card[2].textContent = i.pages;
    button.textContent = i.read;
  }
}

function displayLast() {
  createCard();
  let card = document.querySelectorAll('.library div:last-child p');
  let button = document.querySelector('.library div:last-child button');
    card[0].textContent = myLibrary[myLibrary.length-1].title;
    card[1].textContent = myLibrary[myLibrary.length-1].author;
    card[2].textContent = myLibrary[myLibrary.length-1].pages;
    button.textContent = myLibrary[myLibrary.length-1].read;
}

newBook.addEventListener('click', () => {
  dialog.showModal();
  })

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const fd = new FormData(form);
  const obj = new Book(fd.get('title'),fd.get('author'),fd.get('pages'),fd.get('read'));
  
  dialog.close();
  form.reset();
  displayLast();
})

displayBooks();
