import React, { useEffect, useState } from "react";
import Navs from "./Navs";
import Card_home from "./card_home";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState([]);

  const quoteAPI = async (selectedTag = "") => {
    let arrayOfQuotes = [];

    try {
      const data = await axios.get('https://api.quotable.io/random', {
    params: {
      tags: selectedTag
    }
  });
      arrayOfQuotes = data.data;
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
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
      <Card_home quotes={quote} author={author} />
      <br />
      <br />
      <br />
      <Form.Select aria-label="Default select example" className="mx-auto" style= {{width : "20rem"}} onChange={handleOptionChange}>
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
