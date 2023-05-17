import React, { useState } from 'react';
import './Quote.css';
const quotes = [
  'The greatest glory in living lies not in never falling, but in rising every time we fall',
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
  'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart',
  'You will face many defeats in life, but never let yourself be defeated',
  "Keep smiling, because life is a beautiful thing and there's so much to smile about",
  'Success is not final; failure is not fatal: It is the courage to continue that counts',
  "Nothing is impossible, the word itself says, ‘I'm possible!",
  'Keep your face always toward the sunshine, and shadows will fall behind you.',
  'The love of money is the root of all evil',
  "Opportunities don't happen, you create them",
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div clasName="mainDiv">
      <h1 className="heading">Random Quote Generator</h1>
      <button onClick={generateRandomQuote}>Generate Quote</button>
      <p className="para">{quote}</p>
    </div>
  );
};

export default QuoteGenerator;
