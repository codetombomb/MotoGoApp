import React, { Component } from 'react';
import BikeSearchButton from './BikeSearchButton'
import ListBikeButton from './ListBikeButton';
import CreateBike from './CreateBike';
import BikeMap from './BikeMap'
import PostCard from './PostCard'
import axios from 'axios'


class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    axios
    .get("http://localhost:3001/posts")
    .then(resp => {
      let posts = resp.data
      this.setState({
        posts: [...posts]
      })
    })
  }

  checkOutUsers(){
    console.log(this.state.allUsers)
  }



  render() {
    return (
      <div>
        <h1 id="moto">moto<mark className='green'>GO</mark></h1>
        <BikeSearchButton />
        <ListBikeButton/>
        <br/>
        <br/>
        <br/>
        <CreateBike/>
        <BikeMap user={this.props.currentUser}/>
        {this.checkOutUsers()}
        {this.state.posts.map(post => 
          <PostCard key={post.id} postInfo={post}/>
        )}
      </div>
    )
  }
}
export default Dashboard;
















// import React from "react";

// const Dashboard = props => {
//   return (
//     <div>
//       <div>
//         <h1>Dashboard</h1>
//         <h1>Status: {props.loggedInStatus}</h1>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { Component } from 'react';
// // import Modal from 'react-bootstrap/Modal'
// import TopNav from './TopNav'
// import HomeImg from '../style/images/home.jpg'

// import Login from "./auth/Login";

// class Dashboard extends Component {
//     constructor(props) {
//         super(props);
//         // console.log(props.handleLogout)
//     }
//     setBackground = () => {
//         document.body.style.backgroundImage = `url('${HomeImg}')`
//     }


//     render() {
//         return (
//             <div>
//                 {this.setBackground()}1
//                 <TopNav />
//                 <h1 id="moto">moto<mark className='green'>GO</mark></h1>
//                 <h1>Status: {this.props.loggedInStatus}</h1>
//                 {this.props.loggedInStatus === 'LOGGED_IN' ? <button onClick={() => this.props.handleLogout()}>Logout</button> : <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />}

//             </div>
//         )
//     }
// }
// export default Dashboard;



















// import React from 'react';
// import TopNav from './TopNav'


// const Dashboard = props => {
//     return (
//         <div>
            // <TopNav />
            // <h1>Dashboard</h1>
            // <h1>Status: {props.loggedInStatus}</h1>
//         </div>
//     )
// }
// export default Dashboard;