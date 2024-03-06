const myLibrary = [];
const library = document.querySelector('.library');
const newBook = document.getElementById('new');
const dialog  = document.querySelector('dialog');
const form = document.querySelector('form');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = this.readStatus(read)
    addBookToLibrary(this);
    saveIndex(this);
    }

    readStatus(read) {
    return this.read = read ? "Read" : "Not Read" }    
  }


function addBookToLibrary(object) {
   myLibrary.push(object)
}

function createCard() {

    let div = document.createElement('div');
    let button = document.createElement('button');
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete');

    library.appendChild(div);
    div.appendChild(deleteButton);

    for (let i = 0; i < 3; i++) { 
      let para  = document.createElement('p');
      div.appendChild(para)
    }

    div.appendChild(button);
}


let pompeji = new Book("Pompeji", "Robert Harris", 279, false);
let book = new Book("Booktitle", "Max Mustermann", 385, false);


function displayBooks(array) {
  array = myLibrary;

  for (let i of array) {
    createCard();
    let card = document.querySelectorAll('.library div:last-child p');
    let button = document.querySelector('.library div:last-child button:last-child');
    let deleteButton = document.querySelector('.library div:last-child button:first-child');
    let div = document.querySelector('.library div:last-child');
    
    
    div.setAttribute('data-index', i.dataIndex);
    // ^ was damit? eig unnötig


    card[0].textContent = i.title;
    card[1].textContent = i.author;
    card[2].textContent = i.pages;
    button.textContent = i.read;
    deleteButton.textContent = 'x';
    if(i.read == 'Not Read') {
      button.setAttribute('class', 'notread')
    }

    deleteCard(i,deleteButton,div);
    toggleRead(button, i)

  }
}

function displayLast(newBook) {
  createCard();
  let card = document.querySelectorAll('.library div:last-child p');
  let button = document.querySelector('.library div:last-child button:last-child');
  let deleteButton = document.querySelector('.library div:last-child button:first-child');
  let div = document.querySelector('.library div:last-child');
  
  div.setAttribute('data-index', newBook.dataIndex)

    
    card[0].textContent = newBook.title;
    card[1].textContent = newBook.author;
    card[2].textContent = newBook.pages;
    button.textContent = newBook.read;
    deleteButton.textContent = 'x';
    if(newBook.read == 'Not Read') {
      button.setAttribute('class', 'notread')
    }

    deleteCard(newBook,deleteButton,div);
    toggleRead(button, newBook);
}

function saveIndex(object) {
  let dataIndex = myLibrary.length - 1;
  object.dataIndex = dataIndex;
}

function deleteCard(object,deleteButton,div) {

  deleteButton.addEventListener('click', () => {
    myLibrary.splice(object.dataIndex,1);

    myLibrary.forEach((item)=> {
      if(item.dataIndex > object.dataIndex) 
      item.dataIndex -= 1;
    })
    console.log(myLibrary);
    div.remove();

  })
}

function toggleRead(button, object) {

  button.addEventListener('click', () => {
    if(object.read == 'Read') {
    object.read = 'Not Read';
    button.textContent = 'Not Read';
    button.setAttribute('class','notread')
    } else if (object.read == "Not Read") {
      object.read = 'Read';
      button.textContent = 'Read';
      button.classList.remove('notread');
    }

  })
}

newBook.addEventListener('click', () => {
  dialog.showModal();
  })

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(form);
  let newBook = new Book(fd.get('title'),fd.get('author'),fd.get('pages'),fd.get('read'));
  
  dialog.close();
  form.reset();
  displayLast(newBook);
})

displayBooks();
