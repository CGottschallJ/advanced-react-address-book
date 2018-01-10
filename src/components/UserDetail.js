import React from 'react';

function UserDetail(props) {
  //console.log(props);
  return (
    <div>
      <h2>Name: {props.firstUser.first_name} {props.firstUser.last_name}</h2>
      <h3>Occupation: {props.firstUser.occupation}</h3>
      <h3>Phone: {props.firstUser.phone}</h3>
      <h3>Address: {props.firstUser.address}</h3>
      <img src={props.firstUser.avatar} />
    </div>
  )
}

export default UserDetail;
