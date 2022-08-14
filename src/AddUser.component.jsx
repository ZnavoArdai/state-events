import { Component } from "react";

class AddUser extends Component {
  constructor() {
    super();

    this.state = {
      fname: "NO NAME",
      lname: "ardai",
      age: 28,
      email: "zvnavo@gmail.com",
      password: 123456,
      passwordTwo: 123456,
    };
  }
  firstNameInput = (e) => {
    this.setState({ fname: e.target.value });
  };

  lastNameInput = (e) => {
    this.setState({ lname: e.target.value });
  };
  ageInput = (e) => {
    this.setState({ age: e.target.value });
  };

  emailInput = (e) => {
    this.setState({ email: e.target.value });
  };

  passwordInput = (e) => {
    this.setState({ password: e.target.value });
  };
  passwordTwoInput = (e) => {
    if (this.state.passwordTwo !== this.state.password) {
      alert("nooo");
    } else {
      this.setState({ passwordTwo: e.target.value });
    }
  };

  checkPasswords = (e) => {
    e.preventDefault();

    if (this.state.password === this.state.passwordTwo) {
      alert("they are the same");
    } else {
      alert("not the same");
    }
  };

  render() {
    return (
      <>
        <div>
          <table>
            <thead>
              <th>first name</th>
              <th>last name</th>
              <th>age</th>
              <th>email</th>
              <th>password</th>
              <th>passwordTwo</th>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.fname}</td>
                <td>{this.state.lname}</td>
                <td>{this.state.age}</td>
                <td>{this.state.email}</td>
                <td>{this.state.password}</td>
                <td>{this.state.passwordTwo}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form action="">
          <input
            onChange={this.firstNameInput}
            type="text"
            value={this.state.fname}
          />
          <input
            onChange={this.lastNameInput}
            type="text"
            value={this.state.lname}
          />
          <input
            onChange={this.ageInput}
            type="number"
            value={this.state.age}
          />
          <input
            onChange={this.emailInput}
            type="text"
            value={this.state.email}
          />
          <input
            onChange={this.passwordInput}
            type="password"
            value={this.state.password}
          />
          <input
            onChange={this.passwordTwoInput}
            type="password"
            value={this.state.passwordTwo}
          />
          <button onClick={this.checkPasswords}> check</button>
        </form>
      </>
    );
  }
}
export default AddUser;
