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

function AddTable(arrLength){
    let table = document.getElementById('bookTable');
    let tBody = document.getElementById('tBooks');

    let tr = tBody.insertRow();
    for(let j = 0; j < 5; j++){
        let td = tr.insertCell();
        td.setAttribute("data-axis", `${j}:${arrLength-1}`);
        td.appendChild(document.createElement('button'));
    }
    
    table.appendChild(tBody);
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

let book1 = new Book('Tokyo Blue', 'Haruki Murakami', '384', 'Yes');
let book2 = new Book('After Dark', 'Haruki Murakami', "208", 'Yes');
let book3 = new Book('Bakemonogatari', 'Nisio Isin', "200", 'Yes');

let myLibrary = [book1, book2, book3];

let $addBook = document.querySelector('button');
let spanBooks = document.querySelector('.someBook');
let bookContainer = document.querySelector('#book-container');

//createTable(myLibrary.length);
//ShowData();

ShowElements(bookContainer, myLibrary, 'false');

let $deleteButtons = document.querySelector('.delete-button');

$addBook.addEventListener('click', () => {
    
    let bTitle = document.querySelector('#bTitle').value;
    let bAuthor = document.querySelector('#bAuthor').value;
    let bPages = document.querySelector('#bPages').value;
    let bRead = document.querySelector('input[id="bRead"]:checked').value;
    
    let newBook = new Book(bTitle, bAuthor, bPages, bRead);

    addBookToLibrary(newBook, myLibrary);

    //AddTable(myLibrary.length);
    //ShowData();
    
    ShowElements(bookContainer, myLibrary, 'true');
    
});


bookContainer.addEventListener('click', (e) => {
    let target = e.target;
    let handler;

    if(target.nodeName == "BUTTON" && (handler = target.getAttribute('data-handler'))){
        console.log(handler);
        let divDelete = document.querySelector(`div[data-handler="${handler}"]`);
        divDelete.remove();
        myLibrary.splice(handler, 1);
        ShowElements(bookContainer, myLibrary, 'delete');
    }
});

function ShowElements(divParent, myBooks, showData){
    let y = 0;
    
    if(showData == "true"){
        y = myBooks.length-1;
    }else if (showData == 'delete'){
        divParent.innerHTML = " ";
    };

    for(y; y < myBooks.length; y++){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('data-handler', `${y}`);
        let newContent = document.createTextNode(myBooks[y].infoBook());
        let newBotton = document.createElement('button');
        newBotton.setAttribute('type', `button`);
        newBotton.setAttribute('class', `delete-button`);
        newBotton.setAttribute('data-handler', `${y}`);
        newDiv.appendChild(newContent);
        newDiv.appendChild(newBotton);

        divParent.appendChild(newDiv);
    }

}



