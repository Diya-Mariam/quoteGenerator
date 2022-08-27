import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Bookmark from "./Components/Bookmark";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App ">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />

            <Route path="/bookmark" element={<Bookmark />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
