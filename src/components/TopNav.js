import React from 'react';
import MotoLogo from '../style/images/moto-logo.png'
import axios from 'axios'

function TopNav() {
    const handleLogoutClick = () => {
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
    return (
        <div className="sticky" id="navbar">
            <header>
                {this.props.currentUser.id ?
                    <img
                        className="user-img"
                        alt="avatar"
                        src={this.props.currentUser.avatar_url}
                    />
                    :
                    <img
                        className="user-img"
                        alt="avatar"
                        src="https://i0.wp.com/ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png?fit=204%2C204"
                    />
                }
                <div className="container">
                    <img className="navbar-logo" alt="logo" src={MotoLogo} />
                    <nav>
                        <ul>
                            {!this.props.currentUser.id ?
                                <li><a href="/">Home</a></li> : null}
                            <li><a href="/dashboard">Dashboard</a></li>
                            {!this.props.currentUser.id ?
                                <li><a href="/sign-up">Sign Up</a></li> :
                                <li><a href="/post-my-bike">Add My Bike</a></li>}
                            {this.props.currentUser.id ?
                                <li><a onClick={handleLogoutClick} href="/">Logout</a></li> : null}
                            {this.props.currentUser.id ?
                                <li><a href="/my-info">My Info</a></li> : null}
                            {this.props.currentUser.id ?
                                <li><a href="/my-garage">My Garage</a></li> : null}

                            {this.props.currentUser.id ?
                                <li><h3 style={{ color: 'white' }}>Money Made: ${this.props.currentUser.money_made}</h3></li> : null}

                        </ul>
                    </nav>

                </div>
            </header>

        </div>
    )

}
export default TopNav;
