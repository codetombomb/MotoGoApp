import React, { Component } from 'react';

class BikeCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{display: 'inline-block', padding: "35px"}}>
                <h1>Bike Name: "{this.props.bikeName}"</h1>
                <h2>{this.props.bikeYear} {this.props.bikeMake} {this.props.bikeModel}</h2>
                <img src="https://thumpertalk.com/applications/core/interface/imageproxy/imageproxy.php?img=http://www.zeta-racing.com/bikes/images/drz/pz04.jpg&key=c5a35e44fa9087e1d4b2c043c44ad31aebacf93a990c19b99211306a8adb18c3"
                    alt="Avatar"
                    style={{ width: "250px" }}
                />
                <button>Edit</button>


            </div>
        )
    }
}
export default BikeCard;