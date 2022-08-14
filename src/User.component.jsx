import { Component } from "react";

class User extends Component {
  constructor() {
    super();
    this.state = {
      fname: "NO NAME",
      lname: "ardai",
      age: 28,
      email: "zvnavo@gmail.com",
      password: 1214545,
    };
  }

  printMyNameToLog = () => {
    console.log("Znavo");
  };

  changeFnameToMyName = () => {
    this.setState({ fname: "Znavo" });
  };
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

  printAllDetails = (e) => {
    e.preventDefault()
 {document.getElementById("hii").innerHTML=
`<table>
<thead>
  <th>first name</th>
  <th>last name</th>
  <th>age</th>
  <th>email</th>
  <th>password</th>
</thead>
<tbody>
  <tr>
    <td>${this.state.fname}</td>
    <td>${this.state.lname}</td>
    <td>${this.state.age}</td>
    <td>${this.state.email}</td>
    <td>${this.state.password}</td>
  </tr>
</tbody>
</table>`
}

  };

  render() {
    return (
      <>
        <button onClick={this.printMyNameToLog}>prin my name</button>
        <button onClick={this.changeFnameToMyName}>
          chage firs name to my name
        </button>

        <h2>{this.state.fname}</h2>
        <div id="hii">
        </div>
        <form action="">
          <input id="fnameId"
            onChange={this.firstNameInput}
            type="text"
            placeholder="first name"
            value={this.state.fname}
          />
          <input
            onChange={this.lastNameInput}
            type="text"
            placeholder="last name"
            value={this.state.lname}
          />
          <input
            onChange={this.ageInput}
            type="number"
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.emailInput}
            type="email"
            placeholder="email"
            value={this.state.email}
          />
          <input
            onChange={this.passwordInput}
            type="password"
            placeholder="password"
            value={this.state.password}
          />
          <button onClick={this.printAllDetails}>prit all details</button>
        </form>
      </>
    );
  }
}

export default User;
