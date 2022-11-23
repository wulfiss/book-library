/*function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}*/

Book = class{
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

//Book.prototype.infoBook = function() {
//    return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`);
//}

function addBookToLibrary(object, arr){
    arr.push(object);
}


function ShowElements(divParent, myBooks, showData){
    let y = 0;
    
    if(showData == "true"){
        y = myBooks.length-1;
    }else if (showData == 'delete'){
        divParent.innerHTML = " ";
    };

    for(y; y < myBooks.length; y++){

        let bookDiv = document.createElement('div');
        bookDiv.setAttribute('data-handler', `${y}`);

        let titleBookPara = document.createElement('p');
        titleBookPara.setAttribute('class', 'title-Book bPara');
        titleBookPara.textContent = 'Title: ';

        let titleBookSpan = document.createElement('span');
        titleBookSpan.setAttribute('class', 'titleBook bSpan');
        titleBookSpan.textContent = myBooks[y].title;

        titleBookPara.appendChild(titleBookSpan);
        bookDiv.appendChild(titleBookPara);
        
        let authorBookPara = document.createElement('p');
        authorBookPara.setAttribute('class', 'author-Book bPara');
        authorBookPara.textContent = 'Author: ';

        let authorBookSpan = document.createElement('span');
        authorBookSpan.setAttribute('class', 'authorBook bSpan');
        authorBookSpan.textContent = myBooks[y].author;

        authorBookPara.appendChild(authorBookSpan);
        bookDiv.appendChild(authorBookPara);

        let pagesBookPara = document.createElement('p');
        pagesBookPara.setAttribute('class', 'pages-Book bPara');
        pagesBookPara.textContent = 'Pages: ';

        let pagesBookSpan = document.createElement('span');
        pagesBookSpan.setAttribute('class', 'pagesBook bSpan');
        pagesBookSpan.textContent = myBooks[y].pages;

        pagesBookPara.appendChild(pagesBookSpan);
        bookDiv.appendChild(pagesBookPara);
        
        let statusBookPara = document.createElement('p');
        statusBookPara.setAttribute('class', 'status-Book bPara');
        statusBookPara.textContent = 'Read: ';

        let $read = document.createElement('button');
        $read.setAttribute('type', 'button');
        $read.setAttribute('data-handler', `${y}`);
        $read.setAttribute('id', 'bStatus');

        if(myBooks[y].read == 'true'){
            $read.textContent = 'Yes';
            $read.setAttribute('class', 'BRead trueRead');
        }else if(myBooks[y].read == 'false'){
            $read.textContent = 'No';
            $read.setAttribute('class', 'BRead falseRead');
        }

        statusBookPara.appendChild($read);
        bookDiv.appendChild(statusBookPara);


        let $delete = document.createElement('button');
        $delete.setAttribute('type', `button`);
        $delete.setAttribute('class', `delete-button`);
        $delete.setAttribute('data-handler', `${y}`);
        $delete.textContent = 'Delete';

        bookDiv.appendChild($delete);



        divParent.appendChild(bookDiv);
        
    }

}


let book1 = new Book('Tokyo Blue', 'Haruki Murakami', '384', 'true');
let book2 = new Book('After Dark', 'Haruki Murakami', "208", 'true');
let book3 = new Book('Bakemonogatari', 'Nisio Isin', "200", 'true');

let myLibrary = [book1, book2, book3];

let $addBook = document.querySelector('button');
let spanBooks = document.querySelector('.someBook');
let bookContainer = document.querySelector('#book-container');


ShowElements(bookContainer, myLibrary, 'false');

let $deleteButtons = document.querySelector('.delete-button');

$addBook.addEventListener('click', () => {
    
    let bTitle = document.querySelector('#bTitle').value;
    let bAuthor = document.querySelector('#bAuthor').value;
    let bPages = document.querySelector('#bPages').value;
    let bRead = document.querySelector('input[id="bRead"]:checked').value;
    
    let newBook = new Book(bTitle, bAuthor, bPages, bRead);

    addBookToLibrary(newBook, myLibrary);
    ShowElements(bookContainer, myLibrary, 'true');
    
});


bookContainer.addEventListener('click', (e) => {
    let target = e.target;
    let handler;

    if(target.nodeName == "BUTTON" &&
     target.getAttribute('class') == "delete-button" &&
      (handler = target.getAttribute('data-handler'))){

        let divDelete = document.querySelector(`div[data-handler="${handler}"]`);
        divDelete.remove();
        myLibrary.splice(handler, 1);
        ShowElements(bookContainer, myLibrary, 'delete');

    }else if(target.nodeName == 'BUTTON' && 
    target.getAttribute('id') == "bStatus" && 
    (handler = target.getAttribute('data-handler'))){

        if(myLibrary[handler].read == 'true'){
            myLibrary[handler].read = 'false';
            target.setAttribute('class', 'BRead falseRead');
            target.textContent = 'No';
        }else if(myLibrary[handler].read == 'false'){
            myLibrary[handler].read = 'true';
            target.setAttribute('class', 'BRead trueRead');
            target.textContent = 'Yes';
        }
        
    }
    
});
