import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserDetail from "./components/UserDetail.js";
import ListOfUsers from "./components/ListOfUsers.js";


function App(props) {
  return (
    <div>
      <ListOfUsers users={props.users} />
      <UserDetail firstUser={props.users[0]}/>
    </div>
  );
}

export default App;
