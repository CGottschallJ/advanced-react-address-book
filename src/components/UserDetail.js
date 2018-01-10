import React from 'react';

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

export default UserDetail;
