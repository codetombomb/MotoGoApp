import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      street: "",
      city: "",
      state: "",
      zip_code: "",
      phone_number: "",
      ip_address: "",
      avatar: "",
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
    const { first_name, last_name, email, password, password_confirmation, street, city, state, zip_code, phone_number, ip_address } = this.state;

    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            street: street,
            city: city,
            state: state,
            zip_code: zip_code,
            phone_number: phone_number,
            ip_address: ip_address
            // avatar: avatar
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

  componentDidMount(){
    fetch('https://api.ipify.org?format=jsonp?callback=?', {
      method: 'GET',
      headers: {},
    })
    .then(resp => {
      return resp.text()
    }).then(ip => {
      // console.log('ip', ip)
      this.setState({
        ip_address: ip
      })
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="first_name"
            name="first_name"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.handleChange}
            required
          />
          <input
            type="last_name"
            name="last_name"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.handleChange}
            required
          />

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
            type="street"
            name="street"
            placeholder="Street Address"
            value={this.state.street}
            onChange={this.handleChange}
            required
          />

          <input
            type="city"
            name="city"
            placeholder="City"
            value={this.state.city}
            onChange={this.handleChange}
            required
          />

          <input
            type="state"
            name="state"
            placeholder="State"
            value={this.state.state}
            onChange={this.handleChange}
            required
          />

          <input
            type="zip_code"
            name="zip_code"
            placeholder="Zip Code"
            value={this.state.zip_code}
            onChange={this.handleChange}
            required
          />

          <input
            type="tel"
            name="phone_number"
            placeholder="Phone Number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value={this.state.phone_number}
            onChange={this.handleChange}
            required
          />
          {/* <input
            type="file"
            name="avatar"
            value={this.state.avatar}
            onChange={this.handleChange}
          /> */}

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}



// import React, { Component } from "react";
// import axios from "axios";
// import TopNav from '../TopNav'
// import Form from 'react-bootstrap/Form'
// import SignUpImg from '../../style/images/signup-bg.jpg'


// export default class Registration extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       first_name: "",
//       last_name: "",
//       email: "",
//       password: "",
//       password_confirmation: "",
//       street: "",
//       city: "",
//       state: "",
//       zip_code: "",
//       phone_number: "",
//       avatar: "",
//       registrationErrors: ""
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     const { first_name, last_name, email, password, password_confirmation, street, city, state, zip_code, phone_number, avatar } = this.state;

//     axios
//       .post(
//         "http://localhost:3001/registrations",
//         {
//           user: {
//             first_name: first_name,
//             last_name: last_name,
//             email: email,
//             password: password,
//             password_confirmation: password_confirmation,
//             street: street,
//             city: city,
//             state: state,
//             zip_code: zip_code,
//             phone_number: phone_number,
//             avatar: avatar
//           }
//         },
//         { withCredentials: true }
//       )
//       .then(response => {
//         if (response.data.status === "created") {
//           this.handleSuccessfulAuth(response.data);
//         } else {
//           this.setState({
//             registrationErrors: error
//           })
//         }
//       })
//       .catch(error => {
//         console.log("registration error", error);
//       });
//     event.preventDefault();
//   }

//   setBackground = () => {
//     document.body.style.backgroundImage = `url('${SignUpImg}')`
//   }

//   handleSuccessfulAuth(data) {
//     this.props.handleLogin(data);
//     this.props.history.push("/");
//   }

//   // handleSelectedFile = event => {
//   //   event.persist()
//   //   this.setState({
//   //     avatar: event.target.files[0]
//   //   })
//   // }

//   render() {
//     return (
//       <div>
//         <TopNav/>
//         {this.setBackground()}
//         <Form onSubmit={this.handleSubmit}>
//         <input
//             type="first_name"
//             name="first_name"
//             placeholder="First Name"
//             value={this.state.first_name}
//             onChange={this.handleChange}
//             required
//           />
//           <input
//             type="last_name"
//             name="last_name"
//             placeholder="Last Name"
//             value={this.state.last_name}
//             onChange={this.handleChange}
//             required
//           />

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

//           <input
//             type="password"
//             name="password_confirmation"
//             placeholder="Password confirmation"
//             value={this.state.password_confirmation}
//             onChange={this.handleChange}
//             required
//           />

//           <input
//             type="street"
//             name="street"
//             placeholder="Street Address"
//             value={this.state.street}
//             onChange={this.handleChange}
//             required
//           />

//           <input
//             type="city"
//             name="city"
//             placeholder="City"
//             value={this.state.city}
//             onChange={this.handleChange}
//             required
//           />

//           <input
//             type="state"
//             name="state"
//             placeholder="State"
//             value={this.state.state}
//             onChange={this.handleChange}
//             required
//           />

//           <input
//             type="zip_code"
//             name="zip_code"
//             placeholder="Zip Code"
//             value={this.state.zip_code}
//             onChange={this.handleChange}
//             required
//           />

//           <input
//             type="phone_number"
//             name="phone_number"
//             placeholder="Phone Number"
//             value={this.state.phone_number}
//             onChange={this.handleChange}
//             required
//           />
//           <input 
//           type="file"
//           name="avatar"
//           value={this.state.avatar}
//           onChange={this.handleChange}
//           />
//           <button type="submit">Sign Up</button>
//         </Form>
//       </div>
//     );
//   }
// }