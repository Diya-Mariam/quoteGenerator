import React, { useState, useEffect } from "react";
import axios from "axios";
import Navs from "./Navs";
import Cards from "./Cards";

function Bookmark() {

  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);
  const [id, setID] = useState([]);

  const quoteAPI = () => {

    const quotesID = localStorage.getItem("quotesID")

    Array.prototype.forEach.call(quotesID,(id) => {
      console.log(id)

      axios
        .get(`https://api.quotable.io/quotes/${id}`)
        .then((res) => {
          const data = {
            quote: res.data.content,
            author: res.data.author,
            id: res.data._id
          }
          setQuote((prev) => [...prev, data.quote])
          setAuthor((prev) => [...prev, data.author])
          setID((prev) => [...prev, data.id])

        })

        .catch((err) => {
          console.log(err);
        })
    })
  }

  useEffect(() => {
    quoteAPI()
  }, [])

  return (
    <div className="body1">

      <Navs /><br /><br />
      <Cards quote={quote} author= {author} id= {id}/>
      <br />

    </div>
  );

}


export default Bookmark;
