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
    saveIndex(this);
  }


function addBookToLibrary(object) {
   myLibrary.push(object)
}

function createCard() {

    let div = document.createElement('div');
    let button = document.createElement('button');
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'delete');

    library.appendChild(div);
    div.appendChild(deleteButton);

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
    let button = document.querySelector('.library div:last-child button:last-child');
    let deleteButton = document.querySelector('.library div:last-child button:first-child');
    let div = document.querySelector('.library div:last-child');
    div.setAttribute('data-index', i.dataIndex);
    card[0].textContent = i.title;
    card[1].textContent = i.author;
    card[2].textContent = i.pages;
    button.textContent = i.read;
    deleteButton.textContent = 'x';
  }
}

function displayLast() {
  createCard();
  let card = document.querySelectorAll('.library div:last-child p');
  let button = document.querySelector('.library div:last-child button:last-child');
  let deleteButton = document.querySelector('.library div:last-child button:first-child');
  
  let libraryIndex = myLibrary.length-1;
  let div = document.querySelector('.library div:last-child');
  div.setAttribute('data-index', myLibrary[libraryIndex].dataIndex)

    
    card[0].textContent = myLibrary[libraryIndex].title;
    card[1].textContent = myLibrary[libraryIndex].author;
    card[2].textContent = myLibrary[libraryIndex].pages;
    button.textContent = myLibrary[libraryIndex].read;
    deleteButton.textContent = 'x';
}

function saveIndex(object) {
  let dataIndex = myLibrary.length - 1;
  object.dataIndex = dataIndex;
  return dataIndex
}

function deleteCard() {
  
}

newBook.addEventListener('click', () => {
  dialog.showModal();
  })

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(form);
  new Book(fd.get('title'),fd.get('author'),fd.get('pages'),fd.get('read'));
  
  dialog.close();
  form.reset();
  displayLast();
})

displayBooks();
