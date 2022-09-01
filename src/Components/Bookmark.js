import React, {useState, useEffect} from "react";
import axios from "axios";
import Navs from "./Navs";
import Cards from "./Cards";

function Bookmark() {

  const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const quoteAPI = async () => {
      let arrayOfQuotes = [];

      try{
        const data = await axios.get("https://api.quotable.io/random");
        arrayOfQuotes = data.data;
        console.log(arrayOfQuotes);
      }
      catch(error){
        console.log(error);
      }

      try{
        setQuote(arrayOfQuotes.content);
        setAuthor(arrayOfQuotes.author);
      }
      catch(error){
        console.log(error);
      }
    }
    
    useEffect(() => {
      quoteAPI()
    }, [])

    return (
      <div  className="body1">

        <Navs/><br/><br/>
        <Cards quotes={quote} author={author}/><br/>
        
      </div>
    );

  }


export default Bookmark;
