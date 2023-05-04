const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "https://m.media-amazon.com/images/I/81vlAVbRl3L.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "https://m.media-amazon.com/images/I/51CARXQDTVL.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "https://assets1.bmstatic.com/assets/books-covers/c8/08/l732gAn5-ipad.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "https://www.sup.org/img/covers/med_large/pid_2829.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "https://pup-assets.imgix.net/onix/images/9780691202464.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    }]



for(i=0; i<books.length; i++){

    let cardDivsContainer = document.createElement("div");
    cardDivsContainer.className = "card-container";

    let cardDivs = document.createElement("div");
    cardDivs.className = "card";

    let p1 = document.createElement("h2");
    let title = document.createTextNode(books[i].title);
    p1.appendChild(title);
    cardDivs.appendChild(p1);
    
    let bookImage = document.createElement("img");
    bookImage.setAttribute("alt", `Book-${books[i]["title"]}`);
    bookImage.setAttribute("src", books[i]["imageLink"]);
    bookImage.className = "book-image";
    cardDivs.appendChild(bookImage);

    let p2 = document.createElement("h2");
    let author = document.createTextNode(books[i].author);
    p2.appendChild(author);
    cardDivs.appendChild(p2);

    let p3 = document.createElement("p");
    let year = document.createTextNode(`Year: ${books[i].year}`);
    p3.appendChild(year);
    cardDivs.appendChild(p3);

    let p4 = document.createElement("p");
    let country = document.createTextNode(`Country: ${books[i].country}`);
    p4.appendChild(country);
    cardDivs.appendChild(p4);
    
    let p5 = document.createElement("p");
    let language = document.createTextNode(`Language: ${books[i].language}`);
    p5.appendChild(language);
    cardDivs.appendChild(p5);

    let p6 = document.createElement("p");
    let pages = document.createTextNode(`Num of pages: ${books[i].pages}`);
    p6.appendChild(pages);
    cardDivs.appendChild(p6);
    
    let a1 = document.createElement("a");
    let link1 = document.createTextNode("+Info");
    a1.setAttribute("href", books[i].link);
    a1.setAttribute("target", "_blank");
    a1.appendChild(link1);
    cardDivs.appendChild(a1);



    
    
  
    cardDivsContainer.appendChild(cardDivs);
    document.querySelector(".fase1").appendChild(cardDivsContainer);
    
}


for(i=0; i<books.length; i++){
  let card = `<div class="card-container">
  <div class="card">
  <h2>${books[i].title}</h2>
  <img src="${books[i].imageLink}" class="book-image" alt="book cover">
  <h2>${books[i].author}</h2>
  <p>Year: ${books[i].year}</p>
  <p>Country: ${books[i].country}</p>
  <p>Language: ${books[i].language}</p>
  <p>Num of pages: ${books[i].pages}</p>
  <a href="${books[i].link}" target=_blank> +Info </a>
  </div>
  </div>`
  let fase2 = document.querySelector(".fase2");
  fase2.innerHTML += card;

}

