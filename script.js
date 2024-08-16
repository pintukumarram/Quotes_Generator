let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"Life is a succession of lessons which must be lived to be understood."`,
    person: "– Ralph Waldo Emerson",
  },
  {
    quote: `""I believe that if you'll just stand up and go, life will open up for you. Something just motivates you to keep moving."`,
    person: "– Ralph Waldo Emerson",
  },
  {
    quote: `"Start each day with a positive thought and a grateful heart."`,
    person: "– Tina Turner",
  },
  {
    quote: `"Life is a succession of lessons which must be lived to be understood."`,
    person: "– Ralph Waldo Emerson",
  },
  {
    quote: `"Live for each second without hesitation."`,
    person: " – Elton John",
  },
  {
    quote: `"He who has a why to live for can bear almost any how."`,
    person: " – Friedrich Nietzsche",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
