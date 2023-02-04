const genQuote = (quote) => {
  document.getElementById("quote").innerText = quote.quote;
};

const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => genQuote(data));
};

document.getElementById("btn-quote").addEventListener("click", function () {
  loadQuote();
});
