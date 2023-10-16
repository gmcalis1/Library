const dialog = document.querySelector('dialog');
const showButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog button');
const submitButton = document.querySelector('.submitButton');

let count = 0;
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
        changeReadStatus(event.target.dataset.index);
    }
})

clearButton.addEventListener("click", () => {
    clearTable();
    myLibrary.splice(0, myLibrary.length);
})

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () =>{
    dialog.close();
});

submitButton.addEventListener('click', () =>{
    const book = new Book(titleInput.value, authorInput.value, pageInput.value, readInput.checked)
    console.log(readInput.checked)
    addBookToLibrary(book);
    dialog.close();
    titleInput.value = '';
    authorInput.value = '';
    pageInput.value = '';
});

function changeReadStatus(index){
    console.log('change read status clicked')
    if(myLibrary[index].read == 'Read'){
        myLibrary[index].read = 'Not Read';
    }
    else{
        myLibrary[index].read = 'Read';
    }
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
    count = 0;
    myLibrary.splice(index, 1);
    clearTable();
    displayLibrary();
}

function addRow(title, author, pages, read){
    let row = document.createElement("tr");
    let c0 = document.createElement('td');
    let c1 = document.createElement("td");
    let c2 = document.createElement('td');
    let c3 = document.createElement("td");
    let c4 = document.createElement('td');
    let c5 = document.createElement('button');

    c0.innerHTML = (count + 1);
    c1.innerHTML = title;
    c2.innerHTML = author;
    c3.innerHTML = pages;
    c4.innerHTML = read;
    c5.innerHTML = 'Remove';
    c5.classList.add('remove');
    c5.dataset.index = count;
    
    row.appendChild(c0);
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    c6 = document.createElement('button');
    c6.innerHTML = 'Change read status';
    c6.classList.add('changeRead')
    c6.dataset.index = count;
    count++;
    row.appendChild(c6);
    tableBody.appendChild(row);
}

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.index = myLibrary.length
    if(read == true){
        this.read = 'Read'
    }
    else{
        this.read = 'Not read'
    }

    function info(){
        return title + ' by ' + author + ', ' + pages + ' pages, ' + read
    }
}

function displayLibrary(){
    count = 0;
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






