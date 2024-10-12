import { useEffect, useState } from "react";
import { QuoteCard } from "./components/QuoteCard/QuoteCard";
import { GetQuoteButton } from "./components/GetQuoteButton/GetQuoteButton";
import { getNewQuote } from "./api/getNewQuote";
import "./index.scss";

function App() {
  const [q, setQ] = useState({});
  const getAndSetQuote = async () => {
    await getNewQuote()
      .then((response) => {
        const clearStr = response.data.replace(/[?()]/g, "");
        return clearStr;
      })
      .then((clearStr) => {
        const quote = JSON.parse(clearStr);
        setQ(quote);
        console.log(quote);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAndSetQuote();
  }, []);
  return (
    <div className="flexwrap">
      <div className="flexwrap__container">
        <h1>Random Quote Machine</h1>
        {/* <QuoteCard text={q.quoteText} author={q.quoteAuthor} />
         */}
        <div className="flexwrap__container__card">
          <QuoteCard
            text={q.quoteText}
            author={q.quoteAuthor ? q.quoteAuthor : "Неизвестен"}
          />
        </div>
        <div className="flexwrap__container__btn">
          <GetQuoteButton onClick={getAndSetQuote} />
        </div>
      </div>
    </div>
  );
}

export default App;
