import React from 'react';

class ListOfUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      searchText: ""
    };
  };

  render(){
    console.log('list', this.props);
    const users = this.props.users;
    console.log(users);
    let userDiv = "";
    if (this.state.visible) {
      userDiv = users.map((user, i) => {
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
      userDiv= "";
    }

    return (
      <div className="ListofUsers">
        <div>
          <p>Search:</p>
          <input type='text' onChange={
            (e) => {
              this.props.filterTheUsers(e.target.value);
              //this.setState({searchText: e.target.value});
              //console.log(this.state.searchText);
            }
          } />
        </div>
        <br/>
        <button onClick={
          (e) => {
            this.setState({visible: !this.state.visible});
          }
        }
        type="button">Hide</button>
        {userDiv}
      </div>
    );
  }

}

export default ListOfUsers;
