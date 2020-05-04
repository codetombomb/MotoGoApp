import React, { Component } from "react";
import axios from "axios";

import Registration from "./auth/Registration";
import Login from "./auth/Login";
import TopNav from './TopNav'
import BikeSearchButton from './BikeSearchButton'
import HomeImg from '../style/images/home.jpg'

export default class Home extends Component {
    constructor(props) {
        super(props);
        
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/dashboard");
    }

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

    setBackground = () => {
        document.body.style.backgroundImage = `url('${HomeImg}')`
    }

    render() {
        return (
            <div>
                {this.setBackground()}
                <TopNav />
               <h1 id="moto">moto<mark className='green'>GO</mark></h1>
               <BikeSearchButton />
                {/* <h1>Status: {this.props.loggedInStatus}</h1> */}
                {/* <button onClick={() => this.handleLogoutClick()}>Logout</button> */}
                {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
                {/* <Login handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
            </div>
        );
    }
}