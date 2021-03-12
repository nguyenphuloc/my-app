import React from "react";
import "./index.css";

export default class Form extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
        name: "",
        age: "",
        phoneNumber: "",
        email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state);
    this.setState({
      name: "",
        age: "",
        phoneNumber: "",
        email: ""
    })
  }

  handleChange(event){
    const {name, value} = event.target;
    this.setState({
      ...this.state,
      [name]:value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Thêm Thông Tin</h2>
        <div className="nameContainer">
          <h2>Name :</h2>
          <input type="text" className="name" name='name' value={this.state.name} onChange={this.handleChange} />
        </div>
        <div className="ageContainer">
          <h2>Age :</h2>
          <input type="number" className="age" name='age' value={this.state.age} onChange={this.handleChange} />
        </div>
        <div className="phoneContainer">
          <h2>Phone :</h2>
          <input type="number" className="phone" name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange} />
        </div>
        <div className="emailContainer">
          <h2>Email :</h2>
          <input type="email" className="email" name='email' value={this.state.email} onChange={this.handleChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
