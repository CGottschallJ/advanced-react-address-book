import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserDetail from "./components/UserDetail.js";
import ListOfUsers from "./components/ListOfUsers.js";

function App (props) {
  return (
    <div>
      <ListOfUsers
      selectUser={props.selectUser}
      users={props.users}
      filterTheUsers={props.filterTheUsers} />
      <UserDetail user={props.user} />
    </div>
  );
}

export default App;
