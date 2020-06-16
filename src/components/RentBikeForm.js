import React, { Component } from 'react';

class RentBikeForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <img className="postShowImg" src="https://thumpertalk.com/applications/core/interface/imageproxy/imageproxy.php?img=http://www.zeta-racing.com/bikes/images/drz/pz04.jpg&key=c5a35e44fa9087e1d4b2c043c44ad31aebacf93a990c19b99211306a8adb18c3" alt="Avatar" />
                <div className="rent-form">
                    <h1 style={{
                        fontSize: "40px",
                        textDecoration: "underline",
                    }}>{this.props.bikeInfo.owner.first_name}'s {this.props.bikeInfo.bike.year} {this.props.bikeInfo.bike.make} {this.props.bikeInfo.bike.model}</h1>
                    <br/>
                    <h3>Description</h3>
                    <p>{this.props.bikeInfo.description}</p>
                    <br/>
                    <h3>Price:</h3>
                    <p>${this.props.bikeInfo.price_per_day}/day</p>
                    <br/>
                    <h1>I want to book these days...</h1>
                    <form >
                        <label>Start Date</label>
                        <input type="date" className="calendar" onChange={this.props.handleSelectStartDate} required></input>
                        <label>End Date</label>
                        <input type="date" className="calendar" onChange={this.props.handleSelectEndDate} required></input>
                        <button type="submit" onClick={this.props.postRentBike}>Submit</button>
                    </form>
                </div>

            </div>
        )
    }
}
export default RentBikeForm;