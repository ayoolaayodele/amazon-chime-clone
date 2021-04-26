import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Feed from "./layout/Feed";

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />

        <div className='app__body'>
          <Sidebar />
          <Feed />
        </div>
      </Router>
    </div>
  );
}

export default App;
