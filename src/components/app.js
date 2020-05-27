import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import Dashboard from "./Dashboard";
import CreateBike from "./CreateBike";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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
          !response.data.logged_in &
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
                  loggedInStatus={this.state.loggedInStatus}
                  currentUser={this.state.user}
                />
              )}
            />
            <Route
              exact
              path={"/login"}
              render={props => (
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  handleSuccessfulAuth={this.handleSuccessfulAuth}
                />
              )}
            />

            <Route
              exact
              path={"/create_bike"}
              render={props => (
                <CreateBike
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
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
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
// import React, { Component } from "react";
// import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import axios from "axios";

// import Home from "./Home";
// // import Dashboard from "./Dashboard";
// import Registration from "./auth/Registration";
// import Login from './auth/Login'
// import FindABike from "./FindABike";
// import ListMyBike from "./ListBike/ListmyBike"

// import 'bootstrap/dist/css/bootstrap.min.css';

// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       loggedInStatus: "NOT_LOGGED_IN",
//       user: {}
//     };

//     this.handleLogin = this.handleLogin.bind(this);
//     this.handleLogout = this.handleLogout.bind(this);
//     this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
//     // this.handleLogoutClick = this.handleLogoutClick.bind(this);
//   }

//   checkLoginStatus() {
//     axios
//       .get("http://localhost:3001/logged_in", { withCredentials: true })
//       .then(response => {
//         if (
//           response.data.logged_in &&
//           (this.state.loggedInStatus === "NOT_LOGGED_IN")
//         ) {
//           this.setState({
//             loggedInStatus: "LOGGED_IN",
//             user: response.data.user
//           });
//         } else if (
//           !response.data.logged_in &&
//           (this.state.loggedInStatus === "LOGGED_IN")
//         ) {
//           this.setState({
//             loggedInStatus: "NOT_LOGGED_IN",
//             user: {}
//           });
//         }
//       })
//       .catch(error => {
//         console.log("check login error", error);
//       });
//   }

//   componentDidMount() {
//     this.checkLoginStatus();
//   }

//   handleSuccessfulAuth(data) {
//     this.handleLogin(data);
//     this.history.push("/");
//   }

// //   handleLogoutClick() {
// //     axios
// //         .delete("http://localhost:3001/logout", { withCredentials: true })
// //         .then(response => {
// //             this.props.handleLogout();
// //         })
// //         .catch(error => {
// //             console.log("logout error", error);
// //         });
// // }

//   handleLogout() {
//     this.setState({
//       loggedInStatus: "NOT_LOGGED_IN",
//       user: {}
//     });
//   }

//   handleLogin(data) {
//     this.setState({
//       loggedInStatus: "LOGGED_IN",
//       user: data.user
//     });
//   }

//   getBikes() {
//     axios
//       .get("http://localhost:3001/bikes", { withCredentials: true })
//       .then(response => {
//         console.log(response)
//       })
//   }

//   render() {
//     return (
//       <div className="app">
//         <BrowserRouter>
//           <Switch>

//             <Route
//               exact
//               path={"/"}
//               render={props => (
//                 <Home
//                   {...props}
//                   loggedInStatus={this.state.loggedInStatus}
//                   currentUser={this.state.user ? this.state.user : {}}
//                 />
//               )}
//             />

//             <Route
//               exact
//               path={"/login"}
//               render={props => (
//                 <Login
//                   {...props}
//                   handleLogin={this.handleLogin}
//                   handleLogout={this.handleLogout}
//                   handleSuccessfulAuth={this.handleSuccessfulAuth}
//                   currentUser={this.state.user ? this.state.user : {}}
//                   loggedInStatus={this.state.loggedInStatus}
//                 />
//               )}
//             />

//             <Route
//               exact
//               path={"/sign-up"}
//               render={props => (
//                 <Registration
//                   {...props}
//                   loggedInStatus={this.state.loggedInStatus}
//                 />
//               )}
//             />

//             <Route
//               exact
//               path={"/find-a-bike"}
//               render={props => (
//                 <FindABike
//                   {...props}
//                   loggedInStatus={this.state.loggedInStatus}
//                 />
//               )}
//             />
//             <Route
//               exact
//               path={"/list-my-bike"}
//               render={props => (
//                 <ListMyBike
//                   {...props}
//                   loggedInStatus={this.state.loggedInStatus}
//                 />
//               )}
//             />

//           </Switch>
//         </BrowserRouter>
//         {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
//         <Login handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
//       </div>
//     );
//   }
// }