import React, { Component } from "react";
import axios from "axios";
import TopNav from '../TopNav'
import Form from 'react-bootstrap/Form'
import SignUpImg from '../../style/images/signup-bg.jpg'


export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      phone_number: "",
      registrationErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password, password_confirmation, address, city, state, zip_code, phone_number } = this.state;

    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            address: address,
            city: city,
            state: state,
            zip_code: zip_code,
            phone_number: phone_number
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  setBackground = () => {
    document.body.style.backgroundImage = `url('${SignUpImg}')`
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <TopNav></TopNav>
        {this.setBackground()}
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <input
            type="address"
            name="address"
            placeholder="address"
            value={this.state.address}
            onChange={this.handleChange}
            required
          />

          <input
            type="city"
            name="city"
            placeholder="city"
            value={this.state.city}
            onChange={this.handleChange}
            required
          />

          <input
            type="state"
            name="state"
            placeholder="state"
            value={this.state.state}
            onChange={this.handleChange}
            required
          />

          <input
            type="zip_code"
            name="zip_code"
            placeholder="zip_code"
            value={this.state.zip_code}
            onChange={this.handleChange}
            required
          />

          <input
            type="phone_number"
            name="phone_number"
            placeholder="phone_number"
            value={this.state.phone_number}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}