import React, { useState, useEffect } from "react";
import axios from "axios";
import Navs from "./Navs";
import Cards from "./Cards";

function Bookmark() {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);
  const [id, setID] = useState([]);

  const quoteAPI = () => {
    const quotes = localStorage.getItem("quotesID");
    const quotesID = JSON.parse(quotes);

    for (let i = 0; i < quotesID.length; i++) {

      axios
        .get(`https://api.quotable.io/quotes/${quotesID[i]}`)
        .then((res) => {
          const data = {
            quote: res.data.content,
            author: res.data.author,
            id: res.data._id,
          };
          setQuote((prev) => [...prev, data.quote]);
          setAuthor((prev) => [...prev, data.author]);
          setID((prev) => [...prev, data.id]);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    quoteAPI();
  }, []);

  const quotes = localStorage.getItem("quotesID");
  const quotesID = JSON.parse(quotes);

  return (
    <div className="body1">
      <Navs />
      <br />
      <br />

      {quotesID.map((quoteID, i) => (
        <div>
          <Cards
            quote={quote[i]}
            author={author[i]}
            id={id[i]}
          />
          <br />
        </div>
      ))}

      <br />
    </div>
  );
}

export default Bookmark;
