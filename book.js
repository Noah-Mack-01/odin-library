
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


const lotr = new Book("Lord of the Rings", "Tolkien", false, 1000);
const egame = new Book("Ender's Game", "Orson Scott Card", false, 300);
const irjhn = new Book("Iron John", "Robert Bly", false, 600);



function renderToHTML() {
    myLib.forEach((book)=>{
        console.log(book);
        document.querySelector("html>body>div").innerHTML += (`<div>`
            +`<h1>${book.title}</h1>`
            +`<p class="key">Author:</p><p class="pair">${book.author}</p>`
            +`<p class="key">Page Count:</p><p class="pair">${book.pages}</p>`
            +`<p class="key">Read Yet?:</p><p class="pair">${(this.readYet) ? "Yes" : "No"}</p>`
            +`</div>`)
    });
    
}
renderToHTML();