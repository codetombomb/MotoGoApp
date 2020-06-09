import React, { Component } from 'react';
// import BikeMap from './BikeMap'
import BikeMapTwo from './BikeMapTwo'
import PostCard from './PostCard'
import axios from 'axios'


class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: {},
      curUserCoords: {},
      posts: [],
      postsCoords: []
    }
  }


  componentDidMount() {
    this.setCurUserCoords()
    axios
    .get("http://localhost:3001/posts")
    .then(resp => {
      let posts = resp.data
      this.setPostCoords(posts)
      this.setState({
        posts: [...posts],
      })
    })
  }

  setCurUserCoords(){
    let curUserCoords = {
      lat: this.props.currentUser.lat,
      lng: this.props.currentUser.lon
    }
    this.setState({
      curUserCoords
    })
  }

  setPostCoords(data){
    const newData = []
    data.map(post => {
      
      if(post.owner.lat){
        var newLat = post.owner.lat
      } else {
        var newLat = 30.4461
      }
      if(post.owner.lon){
        var newLng = post.owner.lon
      } else {
        var newLng = -97.6240
      }
      let coord = {userId: post.owner.id, latitude: newLat, longitude: newLng}
      newData.push(coord)
    })
    this.setState({
      postCoords: [...newData]
    })

  }



  setBackgroundColor() {
    document.body.style.backgroundColor = "white"
  }

  handleSelectedBike(bikeData, info){
    debugger
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
        {/* <BikeMap user={this.state.setCurUserCoords} posts={this.state.posts} /> */}
        <BikeMapTwo 
        user={this.state.curUserCoords} 
        postsCoords={this.state.postsCoords}
        handleSelectedBike={this.handleSelectedBike}
        />
        {this.state.posts.map(post =>
          <PostCard key={post.id} postInfo={post} />
        )}
      </div>
    )
  }
}
export default Dashboard;
