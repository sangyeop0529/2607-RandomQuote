import { useState } from "react";
import { quotes } from "../data/quotes";

const RandomQuote = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <h1>RandomQuote</h1>
      <button onClick={handleClick}>다음 명언</button>
      <p>"{quote.text}"</p>
      <p>- {quote.author}</p>
    </div>
  );
};

export default RandomQuote;
