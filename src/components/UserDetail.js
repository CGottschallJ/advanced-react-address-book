import React from 'react';
import {connect} from 'react-redux';

function UserDetail(props) {
  console.log(props);
  return (
    <div>
      <h2>Name: {props.user.first_name} {props.user.last_name}</h2>
      <h3>Occupation: {props.user.occupation}</h3>
      <h3>Phone: {props.user.phone}</h3>
      <h3>Address: {props.user.address}</h3>
      <img src={props.user.avatar} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.currentUser
  }
}

const UserDetailContainer = connect(mapStateToProps)(UserDetail);
export default UserDetailContainer;
