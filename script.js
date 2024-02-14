const myLibrary = [];
const library = document.querySelector('.library');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    /* this.presentBook = function() {
      let readStatus = '';
      if (read) {
        readStatus = "already read"
      } else {
        readStatus = "not read yet"
      }
      return `${this.title} from ${this.author} has ${this.pages}, ${readStatus}.`
    } */
  }
  

function addBookToLibrary(object) {
   myLibrary.push(object)
}

function createCard() {
    let div = document.createElement('div');
    let button = document.createElement('button');
    library.appendChild(div);
    for (let i = 0; i < 4; i++) { 
    let para  = document.createElement('p');
    div.appendChild(para)
    }
    div.appendChild(button);
    button.textContent = "X"

    

}

let pompeji = new Book("Pompeji", "Robert Harris", 279, false);
let book = new Book("Booktitle", "Max Mustermann", 385, false)


function displayBooks(array) {
  array = myLibrary;

  for (let i of array) {
    console.log(i.title)
  }


}