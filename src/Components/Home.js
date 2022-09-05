import React, { useEffect, useState } from "react";
import Navs from "./Navs";
import CardHome from "./CardHome";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";


function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [id, setID] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState([]);

  const quoteAPI = async (selectedTag = "") => {
    let arrayOfQuotes = [];

    try {
      const data = await axios.get('https://api.quotable.io/random');
      arrayOfQuotes = data.data;
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
      setID(arrayOfQuotes._id);
    } catch (error) {
      console.log(error);
    }
  };

  const dropdownAPI = () => {
    var options = []
     axios.get("https://api.quotable.io/tags").then(res => {
        res.data.forEach(tag => {
          if (tag.quoteCount > 0) {
            options.push(tag.name);
          }
        })
        setDropdownOptions(options);
    }).catch(err => {
        console.log(err);
    })
  }

  const handleOptionChange = (e) => {
    quoteAPI(e.target.value);
  }

  useEffect(() => {
    quoteAPI();
    dropdownAPI();
  }, []);

  return (
    <div className="body1">
      <Navs /> <br />
      <br />
      <br />
      <CardHome quotes={quote} author={author} id={id}/>
      <br />
      <br />
      <br />
      <Form.Select aria-label="Default select example" className="mx-auto dropdown"  onChange={handleOptionChange}>
        <option>Open this select menu</option>
        {dropdownOptions.map(tag => {return(<option key={tag} value={tag}>{tag}</option>)})}
      </Form.Select>
      
       
      <br />
      <br />
      <Button onClick={quoteAPI} variant="success" type="submit">
        Next Quote
      </Button>
    </div>
  );
}

export default Home;
