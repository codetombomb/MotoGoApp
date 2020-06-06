import React, { Component } from 'react';
import BikeMap from './BikeMap'
import PostCard from './PostCard'


class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: {}
    }
  }

  componentDidMount() {
    let user = this.props.currentUser
    this.setState({
      currentUser: {...this.state.currentUser, user}
    })
  }

  setBackgroundColor() {
    document.body.style.backgroundColor = "white"
  }

  render() {
    return (
      <div>
        {this.setBackgroundColor()}
        {/* <h1 id="moto">moto<mark className='green'>GO</mark></h1> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <CreateBike loggedInStatus={this.props.loggedInStatus} /> */}
        <BikeMap user={this.props.currentUser} posts={this.props.posts} />
        {this.props.posts.map(post =>
          <PostCard key={post.id} postInfo={post} />
        )}
      </div>
    )
  }
}
export default Dashboard;
