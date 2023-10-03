const dialog = document.querySelector('dialog');
const showButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog button');

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () =>{
    dialog.close();
});

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    
    function info(){
        if(read == true){
            return title + ' by ' + author + ', ' + pages + ' pages, read'
        }
        else{
            return title + ' by ' + author + ', ' + pages + ' pages, not read'
        }
    }
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}


function displayLibrary(){
    console.table(myLibrary);
}


const book1 = new Book("A Book", "Me", "456", true)
const book2 = new Book("Another Book", "Other Person", '2', false)
const book3 = new Book('Yet another Book', 'Hamswith', '521', false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayLibrary();

