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

function createTable(arrLength){
    let table = document.getElementById('bookTable');
    let tBody = document.getElementById('tBooks');

    for(let i = 0; i < arrLength; i++){
        let tr = tBody.insertRow();
        for(let j = 0; j < 4; j++){
            let td = tr.insertCell();
            td.appendChild(document.createTextNode('----'));
            td.setAttribute("data-axis", `${j}:${i}`);
        }
    }

    table.appendChild(tBody);
}


  const tokyoBlues = new Book('Tokyo Blue', 'Haruki Murakami', '384', 'yes');
  const afterDark = new Book('After Dark', 'Haruki Murakami', '208', 'yes');
  

  tokyoBlues.infoBook();
  afterDark.infoBook();



  let myLibrary = [tokyoBlues, afterDark];


  console.log(myLibrary);

let $addBook = document.querySelector('button');
let spanBooks = document.querySelector('.someBook');

createTable(myLibrary.length);

$addBook.addEventListener('click', () => {
    
    let bTitle = document.querySelector('#bTitle').value;
    let bAuthor = document.querySelector('#bAuthor').value;
    let bPages = document.querySelector('#bPages').value;
    let bRead = document.querySelector('input[id="bRead"]:checked').value;
    
    let newBook = new Book(bTitle, bAuthor, bPages, bRead);

    addBookToLibrary(newBook, myLibrary);
    
});

