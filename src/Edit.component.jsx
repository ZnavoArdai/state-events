import { Component } from "react";

class Edit extends Component {
  constructor(props) {
    super();

    this.state = {
      fname: props.fname,
      lname: props.lname,
      age: props.age,
      email: props.email,
      password: props.password,
    };
  }
  firstNameInput = (e) => {
    this.setState({ fname: e.target.value });
    const prev = this.props.fname;
    if (prev != this.state.fname) {
      {
        document.getElementById("pfname").innerText = "value changed";
      }
    }
  
  };

  lastNameInput = (e) => {
    this.setState({ lname: e.target.value });
    const prev = this.props.lname;
    if (prev != this.state.lname) {
      {
        document.getElementById("plname").innerText = "value changed";
      }
    }
  };
  ageInput = (e) => {
    this.setState({ age: e.target.value });
    const prev = this.props.age;
    if (prev != this.state.age) {
      {
        document.getElementById("page").innerText = "value changed";
      }
    }
  };

  emailInput = (e) => {
    this.setState({ email: e.target.value });
    const prev = this.props.email;
    if (prev != this.state.email) {
      {
        document.getElementById("pemail").innerText = "value changed";
      }
    }
  };

  passwordInput = (e) => {
    this.setState({ password: e.target.value });
    const prev = this.props.password;
    if (prev != this.state.password) {
      {
        document.getElementById("ppassword").innerText = "value changed";
      }
    }
  };

  checkIfNotEmpty = (e) => {
    e.preventDefault();
    const empty = "";

    if (
      (this.state.fname &&
        this.state.lname &&
        this.state.age &&
        this.state.email &&
        this.state.password) == empty
    ) {
      alert("somthing is empty");
    } else {
      alert("ok");
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
            </thead>
            <tbody>
              <tr>
                <td>{this.state.fname}</td>
                <td>{this.state.lname}</td>
                <td>{this.state.age}</td>
                <td>{this.state.email}</td>
                <td>{this.state.password}</td>
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
          <p id="pfname"></p>
          <input
            onChange={this.lastNameInput}
            type="text"
            value={this.state.lname}
          />
          <p id="plname"></p>

          <input
            onChange={this.ageInput}
            type="number"
            value={this.state.age}
          />
          <p id="page"></p>

          <input
            onChange={this.emailInput}
            type="text"
            value={this.state.email}
          />
          <p id="pemail"></p>

          <input
            onChange={this.passwordInput}
            type="password"
            value={this.state.password}
          />
          <p id="ppassword"></p>

          <button onClick={this.checkIfNotEmpty}> check</button>
        </form>
      </>
    );
  }
}
export default Edit;
