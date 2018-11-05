import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';


class App extends Component {
  constructor() {
    super();
    this.state = {
        users: [],
        username: '',
        email: ''
    };
    this.addUser = this.addUser.bind(this);
  };
  componentDidMount() {
    this.getUsers();
  };
  getUsers() {
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
    .then((response) => { this.setState({ users: response.data.data.users }); })
    .catch((error) => { console.log(error); });
  };
  addUser(event) {
    event.preventDefault();
    const data = {
      username: this.state.username,
      email: this.state.email
    };
    axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`, data)
    .then((response) => {
      this.getUsers();
      this.setState({ username: '', email: ''});
     })
    .catch((error) => { console.log(error); });
  };
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <br/>
              <h1 className="title is-1">All Users</h1>
              <hr/><br/>
              <AddUser
                username={this.state.username}
                email={this.state.email}
                addUser={this.addUser}
                handleChange={this.handleChange}
              />
              <hr/><br/>
              <UsersList users={this.state.users}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
