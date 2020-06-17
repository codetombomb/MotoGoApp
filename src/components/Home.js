import React, { Component } from "react";
import axios from "axios";

import Registration from "./auth/Registration";
import Login from "./auth/Login";

import HomeImg from '../style/images/home.jpg'


export default class Home extends Component {
  constructor(props) {
    super(props);

      this.state = {
      showReg: false
    }

    // this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  componentDidMount(){
    this.setState({
      showReg: false
    })
  }



  // handleSuccessfulAuth(data) {
  //   this.props.handleLogin(data);
  //   document.body.style.backgroundImage = ""
  //   this.props.history.push("/dashboard");

  // }



  handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  setHomeImg() {
    document.body.style.backgroundImage = `url('${HomeImg}')`
  }

  toggleRegistrationForm(){ 
    this.setState({
      showReg: !this.state.showReg
    })

  }



  render() {
    return (
      <div>
        {this.setHomeImg()}
        <h1 id="moto">moto<mark className='green'>GO</mark></h1>
        <Login handleSuccessfulAuth={this.props.handleSuccessfulAuth} />     
      </div>
    )

  }

}
