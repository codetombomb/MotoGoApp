import React, { Component } from 'react';

class RentalConfirmationPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div style={{
                    position: "relative",
                    padding: "10px",
                    left: "75px",
                    top: '40px'
                }}>
                    <h1 style={{ fontSize: '35px' }}>You have Rented a bike! Here are the details.</h1>
                    <h1>Renter Information</h1>
                    <img alt="avatar" src={this.props.currentUser.avatar_url} />
                    <h3>Name: {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h3>
                    <h3>Address: {this.props.currentUser.address}  {this.props.currentUser.city}, {this.props.currentUser.state}</h3>
                    <h3>Email: {this.props.currentUser.email}</h3>
                    <h3>Phone Number: {this.props.currentUser.phone_number}</h3>
                </div>
                <div style={{
                    position: "relative",
                    padding: "20px",
                    left: "75px",
                    top: '40px'
                }} >
                    <div className="bike-info-div">
                        <h1>Bike Information</h1>
                        <h3>Year: {this.props.rentalDetails.bike.year}</h3>
                        <h3>Make: {this.props.rentalDetails.bike.make}</h3>
                        <h3>Model: {this.props.rentalDetails.bike.model}</h3>
                        <h3>Description: {this.props.rentalDetails.post.description}</h3>
                    </div>

                    <div style={{
                        position: "relative",
                        padding: "20px"
                    }}>
                        <h1>Rental Information</h1>
                        <h3>Price: ${this.props.rentalDetails.post.price_per_day} per day</h3>
                        <h3>Pick Up: {this.props.rentalDetails.start_date}</h3>
                        <h3>Drop Off: {this.props.rentalDetails.end_date}</h3>

                    </div>


                    <img style={{ float: "right", position: "relative", top: '-550px', left: "-300px"}} src="https://thumpertalk.com/applications/core/interface/imageproxy/imageproxy.php?img=http://www.zeta-racing.com/bikes/images/drz/pz04.jpg&key=c5a35e44fa9087e1d4b2c043c44ad31aebacf93a990c19b99211306a8adb18c3" alt="Avatar" />

                </div>


            </div>
        )
    }
}
export default RentalConfirmationPage;