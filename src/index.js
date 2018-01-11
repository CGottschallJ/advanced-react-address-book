import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import users from "./users";
import store from "./store";
import {Provider} from "react-redux";

// let filteredUsers= users;
//
// let currentUser = users[0];
// function selectUser(user) {
//   currentUser = user;
//   render();
// }
//
// function filterTheUsers(name) {
//   if(name === "") {
//     filteredUsers = users;
//   } else {
//     filteredUsers = users.filter((user) => {
//       return user.first_name === name;
//     });
//   }
//   render();
// }

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById("root")
);
