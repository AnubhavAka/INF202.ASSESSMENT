const topBooks = [
  { author: "James Clear", title: "Atomic Habits", image: "./books/book1.jpg", edition: "1st Edition" },
  { author: "Robert Kiyosaki", title: "Rich Dad Poor Dad", image: "./books/book2.jpg", edition: "1st Edition" },
  { author: "Dale Carnegie", title: "How to win friends and influence people", image: "./books/book3.jpg", edition: "1st Edition" },
  { author: "Charles Petzold", title: "Code: The Hidden Language of Computer Hardware and Software", image: "./books/book4.webp", edition: "1st Edition" },
  { author: "Eric Matthes", title: "Python Crash Course", image: "./books/book5.webp", edition: "3rd Edition" },
  { author: "Cory Althoff", title: "The Self-Taught Programmer", image: "./books/book6.webp", edition: "1st Edition" },
];
function createBookCollection() {
  const collection = document.createElement("div");
  collection.className = "items_collections";
  topBooks.forEach((book, index) => {
    const item = document.createElement("div");
    item.className = "collection_item";
item.innerHTML = `
  <img src="${book.image}" alt="" class="item_img">
  <div class="item_details">
    <h3>${book.title}</h3>
    <p><label for="book_author_${index}">Author:</label> <span id="book_author_${index}">${book.author}</span></p>
    <p><label for="book_edition_${index}">Edition:</label> <span id="book_edition_${index}">${book.edition}</span></p>
  </div>
`;
    collection.appendChild(item);
  });
  return collection;
}
document.querySelector(".collection").appendChild(createBookCollection());
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("The form is submitted");
});
let select = document.getElementById("itemType");
topBooks.forEach((book) => {
  let option = document.createElement("option");
  option.value = book.title;
  option.text = book.title; 
  select.appendChild(option);
});
document.querySelector(".find_fine").addEventListener("click", function () {
  const issueDate = new Date(document.querySelector("#issue_date").value);
  const submissionDate = new Date(document.querySelector("#submission_date").value);
  const differenceInDays = (submissionDate - issueDate) / (1000 * 3600 * 24);
  const fine = differenceInDays > 14 ? (differenceInDays - 13) * 2 : 0;

  document.querySelector(".fine").textContent = `Your fine is $${fine}`;
});
