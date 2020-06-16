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
                    padding: "15px",
                    left: "75px",
                    top: '40px'
                }}>
                    <h1 style={{fontSize: '35px'}}>You have Rented a bike! Here are the details.</h1>
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
                    <h1>Bike Information</h1>
                    <h3>Description: {this.props.rentalDetails.description}</h3>
                    <h3>Total Price: ${this.props.rentalDetails.post.start_date - this.props.rentalDetails.post.end_date * this.props.rentalDetails.post.price_per_day}</h3>

                    <img src="https://thumpertalk.com/applications/core/interface/imageproxy/imageproxy.php?img=http://www.zeta-racing.com/bikes/images/drz/pz04.jpg&key=c5a35e44fa9087e1d4b2c043c44ad31aebacf93a990c19b99211306a8adb18c3" alt="Avatar" />

                </div>


            </div>
        )
    }
}
export default RentalConfirmationPage;