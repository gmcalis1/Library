const dialog = document.querySelector('dialog');
const showButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog button');
const submitButton = document.querySelector('.submitButton');

let table = document.querySelector('table');
let tableBody = document.querySelector('.books');
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const pageInput = document.querySelector('#pageInput');
const readInput = document.querySelector('#readInput');
const clearButton = document.querySelector('.clear');
const removeButton = document.querySelector('.remove');

const myLibrary = [];

table.addEventListener('click', (event) =>{
    if(event.target.classList.value === 'remove'){
        console.log(event.target.dataset.index)
        removeRow(event.target.dataset.index);
    }
})

table.addEventListener('click', (event)=>{
    if(event.target.classList.value == 'changeRead'){
        changeReadStatus(event.index);
    }
})

clearButton.addEventListener("click", () => {
    clearTable();
})

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
    titleInput.value = '';
    authorInput.value = '';
    pageInput.value = '';
    readInput.value = '';
});

function changeReadStatus(index){
    console.log(index)
    console.log(myLibrary[index]);
    myLibrary[index].read = 'read'
    clearTable();
    displayLibrary();
}

function clearTable(){
    console.log('clear table clicked')
    while(tableBody.firstChild){
        tableBody.removeChild(tableBody.firstChild);
    }
}

function removeRow(index){
    myLibrary.splice(index, 1);
    tableBody.deleteRow(index);
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
    c5.dataset.index = myLibrary.length;

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    if(read != 'yes'){
        c6 = document.createElement('button');
        c6.innerHTML = 'Change read status';
        c6.classList.add('changeRead')
        row.appendChild(c6);
    }
    tableBody.appendChild(row);
    console.log(c5.classList);
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
    for(i = 0; i < myLibrary.length; i++){
        addRow(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read);
    }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayLibrary();
}






