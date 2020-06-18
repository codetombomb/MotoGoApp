import React, { Component } from 'react';
import axios from 'axios';
import RentHistoryCard from './RentHistoryCard';
// import RentHistoryCard from './RentHistoryCard';



class MyInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myRentedBikes: []
        }

    }

    componentDidMount() {
        axios.get("http://localhost:3001/bike_rent_history", { withCredentials: true })
            .then(resp => {
                console.log(resp)
                // debugger
                this.setState({
                    myRentedBikes: [...resp.data.my_rented_bikes]
                })
            })
    }


    renderRentHistoryCard() {
        return this.state.myRentedBikes.map(rb => {
            // debugger
            return <RentHistoryCard key={rb.renter_post.created_at} ownerInfo={rb.owner} bikeInfo={rb.bike} renterPost={rb.renter_post} />
        })
    }


    render() {
        // const myRentals = this.state.myRentals
        return (
            <div>
                <div style={{padding: "25px", position: "relative", top: "35px"}}>
                    <h1>My Info:</h1>
                    <img alt="avatar" src={this.props.currentUser.avatar_url} />
                    <h3>Name: {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h3>
                    <h3>Address: {this.props.currentUser.address} {this.props.currentUser.city}, {this.props.currentUser.state} {this.props.currentUser.zip_code}</h3>
                    <h3>Phone: {this.props.currentUser.phone_number}</h3>
                    <h3>Email:{this.props.currentUser.email}</h3>
                    <button>Edit</button>
                    <br />
                </div>
                <br />
                <br />
                <h1 style={{fontSize: "40px", position: "relative", left: "35px"}}>Bikes that I have rented:</h1>
                {this.renderRentHistoryCard()}

            </div>
        )
    }
}
export default MyInfo;