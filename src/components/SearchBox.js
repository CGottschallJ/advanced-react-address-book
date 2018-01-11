import React from 'react';
import {setSearchText} from "../actions";
import {connect} from "react-redux";

function SearchBox(props) {
  return (
    <div>
      <h2>Search:</h2>
      <input onChange={(e) => {props.setSearchText(e.target.value)}} />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setSearchText: function(searchText) {
      dispatch(setSearchText(searchText));
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBox);
