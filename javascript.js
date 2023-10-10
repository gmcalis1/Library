const dialog = document.querySelector('dialog');
const showButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog button');
const submitButton = document.querySelector('.submitButton');

let table = document.querySelector('table');
let tableBody = document.querySelector('.library');
const newBody = document.createElement('tbody');
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const pageInput = document.querySelector('#pageInput');
const readInput = document.querySelector('#readInput');
const clearButton = document.querySelector('.clear');
const removeButton = document.querySelector('.remove');

const myLibrary = [];


// FINISH REMOVE BUTTON ON TABLE



clearButton.addEventListener("click", () => {
    clearTable();
})

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () =>{
    console.log(tableBody);
    dialog.close();
});



submitButton.addEventListener('click', () =>{
    const book = new Book(titleInput.value, authorInput.value, pageInput.value, readInput.value)
    addBookToLibrary(book);
    dialog.close();
    titleInput.value = '';
    authorInput.value = '';
    pageInput.value = '';
    readInput.value = '';
});

function clearTable(){
    while(tableBody.firstChild){
        tableBody.removeChild(tableBody.firstChild);
    }
}

function removeRow(index){
    console.log(";alskdjf;a");
    /*tableBody.removeChild(tr);*/
}

function addRow(title, author, pages, read){
    let row = document.createElement("tr");
    let c1 = document.createElement("td");
    let c2 = document.createElement('td');
    let c3 = document.createElement("td");
    let c4 = document.createElement('td');
    let c5 = document.createElement('button');
    row.dataset.index = myLibrary.length - 1;

    c1.innerHTML = title;
    c2.innerHTML = author;
    c3.innerHTML = pages;
    c4.innerHTML = read;
    c5.innerHTML = 'Remove';
    c5.classList.add('remove');
    c5.onclick = removeRow(0);

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    tableBody.appendChild(row);
    
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
    clearTable();
    console.log(myLibrary[0].title)
    for(i = 0; i < myLibrary.length; i++){
        addRow(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read);
    }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayLibrary();
}






