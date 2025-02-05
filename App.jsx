import React, { useState, useEffect } from "react";
import twitterLogo from "./assets/twitterLogo.png";
import "./App.css";

const quotes = [
  { text: "Um homem feliz está satisfeito demais com o presente para pensar demais no futuro.", author: "Einstein" },
  { text: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", author: "Winston Churchill" },
  { text: "Acredite em si próprio e todo o resto virá naturalmente.", author: "Walt Disney" },
];

const colors = ["#ffb6c1", "#00a8ff", "#789d63"];

function getRandomIndex(excludeIndex, arrayLength) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * arrayLength);
  } while (newIndex === excludeIndex);
  return newIndex;
}

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = colors[colorIndex];
  }, [colorIndex]);

  const changeQuote = () => {
    const newQuoteIndex = getRandomIndex(quoteIndex, quotes.length);
    const newColorIndex = getRandomIndex(colorIndex, colors.length);

    setQuoteIndex(newQuoteIndex);
    setColorIndex(newColorIndex);
  };

  return (
    <div id="quote-box" style={{ padding: "20px", borderRadius: "10px" }}>
      <p id="text">"{quotes[quoteIndex].text}"</p>
      <p id="author">- {quotes[quoteIndex].author}</p>
      <button id="new-quote" onClick={changeQuote}>
        Nova Citação
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `"${quotes[quoteIndex].text}" - ${quotes[quoteIndex].author}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="twitter-button">
          <img src={twitterLogo} alt="Tweet" width="30" height="30" />
        </button>
      </a>
    </div>
  );
}

export default App;
