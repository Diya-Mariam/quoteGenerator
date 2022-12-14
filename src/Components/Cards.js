import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";


function Cards(props) {

    return (
      <div>
        <Card className="mx-auto bg-danger list" style={{ color: "white"}}>
          
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                {props.quote}{" "}
              </p><br/>
              
              <footer className="blockquote-footer" style={{color: "white"}}>
                <cite title="Source Title">{props.author}</cite>
              </footer>
              
            </blockquote>
          </Card.Body>
        </Card>


      </div>
    );

  }


export default Cards;
