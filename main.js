function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.infoBook = function() {
    return console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`);
}

function addBookToLibrary(object, arr){
    arr.push(object);
}
  


  const tokyoBlues = new Book('Tokyo Blue', 'Haruki Murakami', '384', 'Read it');
  const afterDark = new Book('After Dark', 'Haruki Murakami', '208', 'yes');
  

  tokyoBlues.infoBook();
  afterDark.infoBook();



  let myLibrary = [tokyoBlues, afterDark];


  console.log(myLibrary);

let $addBook = document.querySelector('button');

$addBook.addEventListener('click', () => {
    
    let bTitle = document.querySelector('#bTitle').value;
    let bAuthor = document.querySelector('#bAuthor').value;
    let bPages = document.querySelector('#bPages').value;
    let bRead = document.querySelector('input[id="bRead"]:checked').value;
    
    let newBook = new Book(bTitle, bAuthor, bPages, bRead);

    addBookToLibrary(newBook, myLibrary);
    
    console.log(myLibrary);
});

