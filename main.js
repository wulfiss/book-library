function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.infoBook = function() {
    return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`);
}

function addBookToLibrary(object, arr){
    arr.push(object);
}

function ShowData(){
    for(let x = 0; x < myLibrary.length; x++){
        let tdTitle = document.querySelector(`td[data-axis = "0:${x}"]`);
        let tdAuthor = document.querySelector(`td[data-axis = "1:${x}"]`);
        let tdPages = document.querySelector(`td[data-axis = "2:${x}"]`);
        let tdRed = document.querySelector(`td[data-axis = "3:${x}"]`);

        tdTitle.textContent = myLibrary[x].title;
        tdAuthor.textContent = myLibrary[x].author;
        tdPages.textContent = myLibrary[x].pages;
        tdRed.textContent = myLibrary[x].read;
    }
}

function ShowElements(divParent, myBooks, showData){
    let y = 0;
    
    if(showData == "true"){
        y = myBooks.length-1;
    }else if (showData == 'delete'){
        divParent.innerHTML = " ";
    };

    for(y; y < myBooks.length; y++){
        /*
        let newDiv = document.createElement('div');
        newDiv.setAttribute('data-handler', `${y}`);
        let newContent = document.createTextNode(myBooks[y].infoBook());

        let $delete = document.createElement('button');
        $delete.setAttribute('type', `button`);
        $delete.setAttribute('class', `delete-button`);
        $delete.setAttribute('data-handler', `${y}`);
        $delete.textContent = 'Delete';

        let $Read = document.createElement('button');
        $Read.setAttribute('type', `button`);
        $Read.setAttribute('class', `read-it`);
        $Read.setAttribute('data-handler', `${y}`);
        $Read.setAttribute('name', 'BReadIt');

        if(myBooks[y].read == 'Yes'){
            $Read.textContent = 'READ IT';
        } else if(myBooks[y].read == 'No'){
            $Read.textContent = 'NO READ IT';
        }


        
        newDiv.appendChild(newContent);
        newDiv.appendChild($Read);
        newDiv.appendChild($delete);
        

        divParent.appendChild(newDiv);
        */

        let bookDiv = document.createElement('div');
        bookDiv.setAttribute('data-handler', `${y}`);

        let nameBookPara = document.createElement('p');
        nameBookPara.textContent = 'Name:';

        let nameBookSpan = document.createElement('span');
        nameBookSpan.setAttribute('id', 'name-book-span');
        

        nameBookPara.appendChild(nameBookSpan);
        bookDiv.appendChild(nameBookPara);

        divParent.appendChild(bookDiv);

    }

}
let book1 = new Book('Tokyo Blue', 'Haruki Murakami', '384', 'Yes');
let book2 = new Book('After Dark', 'Haruki Murakami', "208", 'Yes');
let book3 = new Book('Bakemonogatari', 'Nisio Isin', "200", 'Yes');

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
    target.getAttribute('class') == "read-it" && 
    (handler = target.getAttribute('data-handler'))){
        target.textContent = 'KAKA';
        target.setAttribute('class', `no-read-it`);
    }
    
});





