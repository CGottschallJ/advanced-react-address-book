import React from 'react';
import {connect} from 'react-redux';
import {selectUser} from '../actions';

class ListOfUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  };

  render(){
    let buttonText = "Hide";
    console.log('list', this.props);
    const users = this.props.users;
    console.log(users);
    let userDiv = "";
    if (this.state.visible) {
      //console.log("before", this.props.users);
      const filterUsers = this.props.users.filter((user) => {
        return user.first_name.indexOf(this.props.searchText) > -1;
      });
      //console.log("filtered",filterUsers);
      //console.log("users", users);
      userDiv = filterUsers.map((user, i) => {
        return (
          <div key={i}>
            {user.first_name}
            <a href='#' onClick={
              () => {
                this.props.selectUser(user);
              }
            }>View</a>
          </div>
        );
      });
    } else {
      buttonText="Show";
      userDiv= "";
    }

    return (
      <div className="ListofUsers">
        <br/>
        <button onClick={
          (e) => {
            this.setState({visible: !this.state.visible});
          }
        }
        type="button">{buttonText}</button>
        {userDiv}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    users: state.users,
    searchText: state.searchText
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectUser: function(user) {
      dispatch(selectUser(user));
    }
  }
}

const listOfUsersContainer = connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);
export default listOfUsersContainer;
