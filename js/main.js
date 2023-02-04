var Quotes = [
  {
    author: "― Oscar Wilde",
    quote: "“Be yourself; everyone else is already taken.”",
  },
  {
    author: "― Albert Einstein",
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  },
  {
    author: "― Frank Zappa",
    quote: "“So many books, so little time.”",
  },
  {
    author: "― Marcus Tullius Cicero",
    quote: "“A room without books is like a body without a soul.”",
  },
  {
    author: "― Mae West",
    quote: "“You only live once, but if you do it right, once is enough.”",
  },
];

function printRandomizeQuote() {
  randomIndex = Math.floor(Math.random() * Quotes.length);
  document.getElementById("showQuote").innerHTML = `
    <div class="qoute_box w-50 mx-auto text-center shadow rounded my-5">
      <h2 class="my-2 pt-4 fs-2">Your Quote</h2>
      <p class="my-3 p-3 fw-bold fs-3">${Quotes[randomIndex].quote}</p>
      <p class="pb-5 fw-medium fs-4">${Quotes[randomIndex].author}</p>
    </div>`
  ;
}
