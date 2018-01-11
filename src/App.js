import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserDetail from "./components/UserDetail.js";
import ListOfUsers from "./components/ListOfUsers.js";
import SearchBox from "./components/SearchBox.js";

function App (props) {
  return (
    <div>
      <SearchBox />
      <ListOfUsers />
      <UserDetail />
    </div>
  );
}

export default App;
