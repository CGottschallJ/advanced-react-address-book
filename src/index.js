import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import users from "./users";

let filteredUsers= users;

let currentUser = users[0];
function selectUser(user) {
  currentUser = user;
  render();
}

function filterTheUsers(name) {
  if(name === "") {
    filteredUsers = users;
  } else {
    filteredUsers = users.filter((user) => {
      return user.first_name === name;
    });
  }
  render();
}

function render() {
  ReactDOM.render(
    <App
    users={filteredUsers}
    selectUser={selectUser}
    user={currentUser}
    filterTheUsers={filterTheUsers}
    />,
    document.getElementById("root")
  );
}
render();
