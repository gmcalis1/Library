const dialog = document.querySelector('dialog');
const showButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog button');
const submitButton = document.querySelector('.submitButton')

const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const pageInput = document.querySelector('#pageInput');
const readInput = document.querySelector('#readInput');

const myLibrary = [];

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () =>{
    dialog.close();
});

submitButton.addEventListener('click', () =>{
    const book = new Book(titleInput.value, authorInput.value, pageInput.value, readInput.value)
    addBookToLibrary(book);
    dialog.close();
});



function addRow(title, author, pages, read){
    let table = document.querySelector("table")

    let row = document.createElement("tr");
    let c1 = document.createElement("td");
    let c2 = document.createElement('td');
    let c3 = document.createElement("td");
    let c4 = document.createElement('td');

    c1.innerHTML = title;
    c2.innerHTML = author;
    c3.innerHTML = pages;
    c4.innerHTML = read;

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);

    table.appendChild(row);
}


function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    
    function info(){
        return title + ' by ' + author + ', ' + pages + ' pages, ' + read
    }
}


function displayLibrary(){
    console.table(myLibrary);
    for(i = 0; i < myLibrary.length; i++){
        addRow[myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read];
    }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayLibrary();
}






