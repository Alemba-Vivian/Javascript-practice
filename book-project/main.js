
let text = document.querySelector('p');

function Book(title, author, pages){

    this.title =title;
    this.author =author;
    this.pages =pages;
    this.read =["read", "not read yet"];
    this.bookInfo =function(){
      
        text.innerText = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read[1]}`;
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read[1]}`;
    }


}
const book1 = new Book("The Hobbit", "J.R.R. Tolkie", 295);
console.log(book1.bookInfo());
