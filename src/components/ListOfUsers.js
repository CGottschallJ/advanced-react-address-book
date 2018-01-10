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
    const users = this.props.users;
    let userDiv = "";
    if (this.state.visible) {
      userDiv = users.map(function(user, i) {
        return <div key={i}>{user.first_name}</div>;
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
              this.setState({searchText: e.target.value});
              //console.log(this.state.searchText);
            }
          } />
          <button type='button'>Search</button>
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
