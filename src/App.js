import React from "react";
import "./index.css";

import Form from "./Form";
import Table from "./Table";
export default class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      userInfor: {
        name: "",
        age: "",
        phoneNumber: "",
        email: ""
      },
      listUser: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(user){
    this.setState({
      ...this.state,
      listUser: [...this.state.listUser, user]
    })
  }

  render() {
    console.log(this.state.listUser);
    return (
      <div className="App">
        <h1>Quản Lý Sinh Viên</h1>
        <div className="line"></div>
        <div className="content">
          <Form submit={this.handleSubmit} />
        </div>
        <div className="table">
          <Table listUser = {this.state.listUser} />
        </div>
      </div>
    );
  }
}
