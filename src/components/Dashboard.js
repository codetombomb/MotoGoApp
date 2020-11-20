import React, { Component } from 'react';
import BikeMapTwo from './BikeMapTwo'
import Select from 'react-select'
import axios from 'axios'

const options = [
  { value: "none", label: "none" },
  { value: 'Make', label: 'Make' },
  { value: 'Model', label: 'Model' },
  { value: 'Location', label: 'Location' }
]

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      searchFilter: "none"
    }
    this.getAllPosts = this.getAllPosts.bind(this)

  }



  componentDidMount() {
    this.getAllPosts()
  }

  getAllPosts() {
    axios
      .get("http://localhost:3001/posts")
      .then(resp => {
        let posts = resp.data
        this.setState({
          posts: [...posts]
        })
      })
  }

  setBackgroundColor() {
    document.body.style.backgroundColor = "white"
  }

  handleSelectedBike(bikeData) {
    this.setState({
      toggleShowBike: true
    })
  }

  rentBikePage = (info) => {
    this.props.history.push("/bike")
  }


  render() {
    return (
      <div>
        {this.setBackgroundColor()}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ padding: "10px", paddingLeft: "60px", marginTop: "-20px", position: "fixed", backgroundColor: "white" }}>
          <h1 style={{ float: "left", position: "relative", marginTop: "5px", paddingRight: "15px" }}>filter by</h1>
          <Select id="filter-options" options={options} onChange={this.handleFilterSelection} />
        </div>

        <BikeMapTwo
          user={this.props.currentUser}
          posts={this.state.posts}
          handleBikeMapMarkerClick={this.props.handleBikeMapMarkerClick}
          history={this.props.history}
        />

        {posts}
      </div>
    )
  }
}
export default Dashboard;

