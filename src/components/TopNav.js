import React, { Component } from 'react';
import { Navlink, Link, Redirect, Route } from 'react-router-dom'
import MotoLogo from '../style/images/moto-logo.png'
import axios from 'axios'




class TopNav extends Component {
    constructor(props){
        super(props)
     
    }

    handleLogoutClick(){
        axios
        .delete("http://localhost:3001/logout", { withCredentials: true })
        .then(response => {
          this.props.handleLogout();
          this.props.history.push("/");
        })
        .catch(error => {
          console.log("logout error", error);
        });
    }



    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <img className="navbar-logo" alt="logo" src={MotoLogo} />
                        <div>
                        {this.props.currentUser ? <h1>Current User: {this.props.currentUser.first_name}</h1> : <h1>No one logged in</h1> }
                        </div>

                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/dashboard">Dashboard</a></li>
                                <li><a href="/find-a-bike">Find A Bike</a></li>
                                <li><a href="/sign-up">Sign Up</a></li>
                                <li><a onClick={this.handleLogoutClick} href="/">Logout</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

            </div>
        )

    }
}
export default TopNav;





                            // {this.props.loggedInStatus === "LOGGED_IN" ? (
                            //     <Navbar className="topnav" bg="dark" variant="dark">
                            //     <Navbar.Brand className="navbar-logo" href="/"><img src={MotoLogo} /></Navbar.Brand>
                            //     <Nav className="mr-auto">
                            //         <Nav.Link href="/">Home</Nav.Link>
                            //         {/* <Nav.Link href="/sign-up">Sign Up</Nav.Link> */}
                            //         <Nav.Link onClick={this.props.handleLogout}>Logout</Nav.Link>
                            //         <Avatar src={this.props.currentUser.avatar_url} />
                            //     </Nav>
                            //     <h1 style={{ color: "white" }}>{this.props.loggedInStatus} AS: {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>                  

                            // </Navbar>
                            // ) : (
                            //     <Navbar className="topnav" bg="dark" variant="dark">
                            //     <Navbar.Brand className="navbar-logo" href="/"><img src={MotoLogo} /></Navbar.Brand>
                            //     <Nav className="mr-auto">
                            //         <Nav.Link href="/">Home</Nav.Link>
                            //         <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                            //         {/* <Nav.Link onClick={this.props.handleLogout}>Logout</Nav.Link> */}
                            //         <Avatar src="d" />
                            //     </Nav>
                            //     <h1 style={{ color: "white" }}>{this.props.loggedInStatus}</h1>

                            // </Navbar>
                            // )}
