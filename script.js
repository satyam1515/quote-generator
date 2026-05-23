const quotes = {
  motivation: [
    "Believe in yourself.",
    "Never give up.",
    "Push yourself every day."
  ],

  success: [
    "Success is earned, not given.",
    "Dream big and dare to fail.",
    "Hard work beats talent."
  ],

  life: [
    "Life is short, enjoy every moment.",
    "Be kind whenever possible.",
    "Happiness depends on you."
  ]
};

function generateQuote() {

  const category = document.getElementById("category").value;

  let selectedQuotes = [];

  if(category === "all") {
    selectedQuotes = [
      ...quotes.motivation,
      ...quotes.success,
      ...quotes.life
    ];
  } else {
    selectedQuotes = quotes[category];
  }

  const randomIndex =
    Math.floor(Math.random() * selectedQuotes.length);

  document.getElementById("quote").innerText =
    selectedQuotes[randomIndex];
}

function copyQuote() {

  const quote =
    document.getElementById("quote").innerText;

  navigator.clipboard.writeText(quote);

  alert("Quote copied!");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
