const quotes = [
  "Believe in yourself.",
  "Never give up.",
  "Success is earned, not given.",
  "Dream big and dare to fail.",
  "Stay positive and work hard.",
  "Push yourself every day."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").innerText = quotes[randomIndex];
}
