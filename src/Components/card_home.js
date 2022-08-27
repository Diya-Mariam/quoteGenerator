import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function Card_home(props) {
  return (
    <div>
      <Card
        className="mx-auto bg-danger "
        style={{ width: "500px", color: "white" }}
      >
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> {props.quotes} </p>
            <br />

            <div>
              <footer className="blockquote-footer" style={{ color: "white" }}>
                <cite title="Source Title">{props.author}</cite>
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

function bookmark() {
  const bookmarkurl = "https://www.google.com"; // replace your site URL

  const bookmarktitle = "example.com: PHP SQL and Javascript Source"; // replace this line with your site title

  if (document.all) window.external.AddFavorite(bookmarkurl, bookmarktitle);
  else if (window.sidebar)
    // firefox

    window.sidebar.addPanel(bookmarktitle, bookmarkurl, "");
}

export default Card_home;
