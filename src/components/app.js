import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import Dashboard from "./Dashboard";
import CreateBikePost from "./CreateBikePost";
import TopNav from './TopNav'
import BikeMap from "./BikeMap";
import Registration from "./auth/Registration";
// import BikeMap from "./BikeMap";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      posts: [],
      mode: "login"
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  // getAllPosts() {
  //   axios
  //     .get("http://localhost:3001/posts")
  //     .then(resp => {
  //       let posts = resp.data
  //       this.setState({
  //         posts: [...posts],
  //       })
  //     })
  // }

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &&
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
    // this.getAllPosts()

  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  changeMode(newMode){
    this.setState({
      mode: newMode
    })
  }


  render() {
    return (
      <div className="app">
          <TopNav
            handleLogout={this.handleLogout}
            currentUser={this.state.user}
            loggedInStatus={this.state.loggedInStatus}
          />
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={props => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  currentUser={this.state.user}
                  loggedInStatus={this.state.loggedInStatus}
                  mode={this.state.mode}
                  changeMode={this.changeMode}
                />
              )}
            />

            <Route
              exact
              path={"/post-my-bike"}
              render={props => (
                <CreateBikePost
                  {...props}
                  currentUser={this.state.user}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={props => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  currentUser={this.state.user}
                  // posts={this.state.posts}
                />
              )}

            />

            {/* <Route
            exact
            path={"/find-a-bike"}
            render={props => (
              <BikeMap
              {...props}
              />
            )}

            /> */}

           <Route
              exact
              path={"/sign-up"}
              render={props => (
                <Registration
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            {/*
            <Route
              exact
              path={"/find-a-bike"}
              render={props => (
                <BikeMap
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  currentUser={this.state.user}
                /> */}
              
            {/* /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
