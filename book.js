
let myLib = [];

function Book(title, author, readYet, pages) {
    this.title = title;
    this.author = author;
    this.readYet = readYet;
    this.pages = pages;

    addToLibrary(this);

}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}. ${this.pages} pages. ${(this.readYet) ? "Have Read." : "Have Not Read Yet."}`
}

function addToLibrary(book) {
    myLib.push(book);
}

function removefromLibrary(book) {
    myLib = myLib.filter(booktwo => booktwo!= book);
}


const lotr = new Book("Lord of the Rings", "Tolkien", false, 1000);
const egame = new Book("Ender's Game", "Orson Scott Card", false, 300);
const irjhn = new Book("Iron John", "Robert Bly", false, 600);


function renderToHTML() {
    document.querySelector("html>body>div>div").innerHTML ="";
    for (i = 0; i < myLib.length; i++) {
        let book = myLib[i];
        document.querySelector("html>body>div>div").innerHTML += (`<div data-key="${i}">`
            +`<h1>${book.title}</h1>`
            +`<button type="button" class=delete data-key=${i}>X</button>`
            +`<p class="key">Author:</p><p class="pair">${book.author}</p>`
            +`<p class="key">Page Count:</p><p class="pair">${book.pages}</p>`
            +`<p class="key">Read Yet?:</p><p class="pair">${(book.readYet) ? "Yes" : "No"}</p>`
            +`</div>`);   
    }

    for (j=0; j<myLib.length; j++) {
        document.querySelector(`div[data-key="${j}"]>button`).addEventListener("click",(event)=>{
            let temp = event.target.dataset.key;
            myLib.splice(temp, 1);
            renderToHTML();
        });
     }
    
}
renderToHTML();

document.getElementById("submission").addEventListener("click", (event)=>{
    event.preventDefault();
    const newBook= new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("read").checked,
        document.getElementById("pgct").value
    )
    renderToHTML();
})

