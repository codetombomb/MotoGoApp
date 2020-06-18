import React, { Component } from 'react';

class MyBikeCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <img style={{width: "30%", padding: "10px"}} alt="bike-image" src="https://thumpertalk.com/applications/core/interface/imageproxy/imageproxy.php?img=http://www.zeta-racing.com/bikes/images/drz/pz04.jpg&key=c5a35e44fa9087e1d4b2c043c44ad31aebacf93a990c19b99211306a8adb18c3" />
                <div style={{
                    position: "relative",
                    float: "right",
                    left: "-800px",
                    top: "10px"

                }}>
                    <h1>"{this.props.bikeInfo.bike_name}"</h1>
                    <h2>{this.props.bikeInfo.year} {this.props.bikeInfo.make} {this.props.bikeInfo.make} </h2>
                    <br/>
                    <h3>Rented By:</h3>
                    <h4>Renter : {this.props.renterInfo}</h4>
                    <img alt="avatar" src={this.props.renterAvatar}/>
                    <h4>Renter Name: {this.props.renterFirstName} {this.props.renterLastName} </h4>
                    <h4>Rented from {this.props.postStartDate} to {this.props.postEndDate} </h4>
                    <h4>Price: ${this.props.postCost}</h4>
                    <br/>
                    <button style={{width: "150px"}}>Delete History</button>
                </div>
                    <hr style={{position: "relative", left: "-30px"}}/>
            </div>
        )
    }
}
export default MyBikeCard;