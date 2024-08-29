"use client";

import { useState } from "react";
import { quote } from "@/interfaces/quote";
import { quotesData } from "@/data/quotesData";
import Loading from "@/components/Loading";

export default function Home() {
  const [quote, setQuote] = useState<quote>();
  const [loading, setLoading] = useState(false);

  const generateQuote = () => {
    setLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotesData.length);
      setQuote(quotesData[randomIndex]);
      setLoading(false);
    }, Math.random() * 500 + 500); // Random delay between 0.5 to 1 second
  };

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-6 bg-light-base dark:bg-dark-base text-light-textPrimary dark:text-dark-textPrimary">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-light-textPrimary dark:text-dark-textPrimary">
          Quotes Generator
        </h1>
        <p className="text-xl font-medium text-light-textSecondary dark:text-dark-textSecondary">
          Get inspired by random quotes
        </p>
      </header>

      <section className="bg-light-neutral dark:bg-dark-neutral p-8 rounded-lg shadow-lg mb-12 text-center max-w-2xl md:w-10/12 md:h-96 flex items-center justify-center">
        {loading ? (
          <Loading />
        ) : quote ? (
          <div>
            <blockquote className="text-3xl italic mb-4">
              &quot;{quote.quote}&quot;
            </blockquote>
            <cite className="block text-lg font-semibold text-light-textAccent dark:text-dark-textAccent">
              - {quote.author}
            </cite>
          </div>
        ) : (
          <p className="text-lg font-semibold text-light-textAccent dark:text-dark-textAccent">
            Click the button below to generate a new quote
          </p>
        )}
      </section>

      <button
        disabled={loading}
        onClick={generateQuote}
        className="px-8 py-4 text-lg font-semibold text-white bg-light-primary dark:bg-dark-primary rounded-lg shadow-md hover:bg-light-secondary dark:disabled:bg-dark-secondary disabled:bg-light-secondary dark:hover:bg-dark-secondary transition-colors duration-300"
      >
        Generate New Quote
      </button>
    </main>
  );
}
