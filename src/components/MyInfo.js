import React, { Component } from 'react';
import axios from 'axios';
import RentHistoryCard from './RentHistoryCard';


class MyInfo extends Component {
    constructor(props) {
        super(props)
    
    }
    

    render() {
        return (
            <div>
                <h1>My Info:</h1>
                <img alt="avatar" src={this.props.currentUser.avatar_url}/>
                <h3>Name: {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h3>
                <h3>Address: {this.props.currentUser.address} {this.props.currentUser.city}, {this.props.currentUser.state} {this.props.currentUser.zip_code}</h3>
                <h3>Phone: {this.props.currentUser.phone_number}</h3>
                <h3>Email:{this.props.currentUser.email}</h3>
                <button>Edit</button>
                <br/>
                <h1>Bikes that I have rented:</h1>
                {this.props.myRentals.map( (postInfo, index) => {
                    return <RentHistoryCard key={index} bike={postInfo.bike} post={postInfo.post} renter={postInfo.renter}/>
                })}
                
            </div>
        )
    }
}
export default MyInfo;