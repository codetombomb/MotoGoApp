import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import Dashboard from "./Dashboard";
import CreateBikePost from "./CreateBikePost";
import TopNav from './TopNav'
import Registration from "./auth/Registration";
import RentBikePage from "./RentBikePage";
import RentBikeForm from "./RentBikeForm"
import RentalConfirmationPage from './RentalConfirmationPage'
import MyGarage from './MyGarage'

import { createBrowserHistory } from 'history'
import MyInfo from "./MyInfo";
const history = createBrowserHistory();

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      selectedBike: {},
      rentBikeInfo: {},
      confirmRentalInfo: {},
      startDate: "",
      endDate: ""
    };
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.postRentBike = this.postRentBike.bind(this)
  }


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

  handleSelectedBike = (bikeDetails) => {
    this.setState({
      selectedBike: { ...bikeDetails }
    })
    history.push("/bike")
  }

  handleBikeMapMarkerClick = (info) => {
    this.setState({
      rentBikeInfo: { ...info }
    })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleSelectStartDate = e => {
    e.preventDefault()
    let date = e.target.value
    this.setState({
      startDate: date
    })
  }

  handleSelectEndDate = e => {
    e.preventDefault()
    let date = e.target.value
    this.setState({
      endDate: date
    })
  }

  postRentBike(e) {
    e.preventDefault();
    const formData = {
      owner_id: this.state.rentBikeInfo.owner.id,
      renter_id: this.state.user.id,
      post_id: this.state.rentBikeInfo.id,
      start_date: this.state.startDate,
      end_date: this.state.endDate,
      price_per_day: this.state.rentBikeInfo.price_per_day,
      status: "Rented"
    }
    axios.post("http://localhost:3001/renter_posts", {
      rent_info: formData
    })
      .then(resp => {
        this.setState({
          confirmRentalInfo: { ...resp.data },
          rentBikeInfo: {}
        })
        history.push('/rental-review')
      })

  }

  handleSuccessfulAuth(data) {
    this.handleLogin(data);
    document.body.style.backgroundImage = ""
    history.push("/dashboard");
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
  render() {
    return (
      <div className="app">
        <TopNav
          handleLogout={this.handleLogout}
          currentUser={this.state.user}
          loggedInStatus={this.state.loggedInStatus}
        />
        {/* {this.state.confirmRentalInfo.id ? <Redirect to="/rental-review" /> : null} */}
        {this.state.rentBikeInfo.id ?
          <RentBikeForm
            bikeInfo={this.state.rentBikeInfo}
            currentUser={this.state.user}
            handleSelectStartDate={this.handleSelectStartDate}
            handleSelectEndDate={this.handleSelectEndDate}
            postRentBike={this.postRentBike}
          /> :
          <Router history={history}>
            <Switch>
              <Route
                exact
                path={"/"}
                render={props => (
                  <Home
                    {...props}
                    handleSuccessfulAuth={this.handleSuccessfulAuth}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    currentUser={this.state.user}
                    loggedInStatus={this.state.loggedInStatus}
                    changeMode={this.changeMode}
                  />
                )}
              />
              <Route
                exact
                path={"/bike"}
                render={props => (
                  <RentBikePage
                    {...props}
                    bike={this.state.selectedBike}
                    currentUser={this.state.user}
                    bikeDescription={this.state.selectedBike.description}
                    price={this.state.selectedBike.price_per_day}
                    bikeYear={this.state.selectedBike.bike.year}
                    bikeMake={this.state.selectedBike.bike.make}
                    bikeModel={this.state.selectedBike.bike.model}
                    handleClickRent={this.handleRentBike}
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
                    handleBikeMapMarkerClick={this.handleBikeMapMarkerClick}
                    handlePostCardClick={this.handleBikeMapMarkerClick}
                    rentBikeInfo={this.state.rentBikeInfo}
                    confirmRentalInfo={this.state.confirmRentalInfo}
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
                path={"/my-info"}
                render={props => (
                  <MyInfo
                    {...props}
                    currentUser={this.state.user}
                  />
                )}
              />
              <Route
                exact
                path={"/my-garage"}
                render={props => (
                  <MyGarage
                    {...props}
                    currentUser={this.state.user}
                  />
                )}
              />

              <Route
                exact
                path={"/rental-review"}
                render={props => (
                  <RentalConfirmationPage
                    {...props}
                    rentalDetails={this.state.confirmRentalInfo}
                    currentUser={this.state.user}
                  />
                )}
              />
              <Route
                exact
                path={"/sign-up"}
                render={props => (
                  <Registration
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                    handleSuccessfulAuth={this.handleSuccessfulAuth}
                  />
                )}
              />
              <Route
                exact
                path={"/rent-bike"}
                render={props => (
                  <RentBikeForm
                    {...props}
                    selectedBike={this.selectedBike}
                  />
                )}
              />
            </Switch>
          </Router>
        }
      </div>
    );
  }
}


