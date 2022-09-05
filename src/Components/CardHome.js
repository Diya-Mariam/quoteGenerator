import React  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function Card_home(props) {


  const bookmark = () => {

    var ourquotes = JSON.parse(localStorage.getItem('quotesID') || "[]")
    console.log(ourquotes)

    var ourquote = props.id

    ourquotes.push(ourquote)

    localStorage.setItem('quotesID', JSON.stringify(ourquotes))

  }

  return (
    <div>
      <Card
        className="mx-auto bg-danger list"
        style={{ width: "500px", color: "white" }}
      >
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> {props.quotes} </p>
           
            <br />

            <div>
              <footer className="blockquote-footer" style={{ color: "white" }}>
                <cite title="Source Title" >{props.author}</cite>
              </footer>
            </div>

            <div className="row">
              <div className="col-3 offset-9">
                <Button className="btn bg-danger" onClick={bookmark}>
                  
                  <i className="fas fa-bookmark "></i>
                </Button>
              </div>
            </div>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}


export default Card_home;
