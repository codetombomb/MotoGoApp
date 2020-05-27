import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
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
    const { email, password } = this.state;

    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            email: email,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
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

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import axios from "axios";
// import HomeImg from '../../style/images/home.jpg'
// import TopNav from '../TopNav'

// export default class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//       loginErrors: ""
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);

//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
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
//   // handleSuccessfulAuth(data) {
//   //   this.props.handleLogin(data);
//   //   this.history.push("/");
//   // }

//   handleSubmit(event) {
//     const { email, password } = this.state;

//     axios
//       .post(
//         "http://localhost:3001/sessions",
//         {
//           user: {
//             email: email,
//             password: password
//           }
//         },
//         { withCredentials: true }
//       )
//       .then(response => {
//         console.log('res from login', response)
//         if (response.data.logged_in) {
//           this.props.handleSuccessfulAuth(response.data);
//         }
//       })
//       .catch(error => {
//         console.log("login error", error);
//       });
//     event.preventDefault();
//   }

//   setBackground = () => {
//     document.body.style.backgroundImage = `url('${HomeImg}')`
//   }

//   render() {
//     return (
//       <div>
//         {this.setBackground()}1
//         <TopNav handleLogoutClick={this.handleLogoutClick} />
//         <h1 id="moto">moto<mark className='green'>GO</mark></h1>
//         <h1>Status: {this.props.loggedInStatus}</h1>
//         {/* {this.props.loggedInStatus === 'LOGGED_IN' ? <button onClick={() => this.props.handleLogout()}>Logout</button> : <Login handleSuccessfulAuth={this.props.handleSuccessfulAuth} />} */}
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={this.state.email}
//             onChange={this.handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={this.state.password}
//             onChange={this.handleChange}
//             required
//           />

//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   }
// }