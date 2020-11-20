import React from 'react';

function RentHistoryCard() {
    return (
        <div>
            <div style={{
                padding: "35px"
            }}>
                <img style={{
                    width: "20%"
                }} src="https://thumpertalk.com/applications/core/interface/imageproxy/imageproxy.php?img=http://www.zeta-racing.com/bikes/images/drz/pz04.jpg&key=c5a35e44fa9087e1d4b2c043c44ad31aebacf93a990c19b99211306a8adb18c3" />
                <h1>{this.props.ownerInfo.first_name}'s {this.props.bikeInfo.year} {this.props.bikeInfo.make} {this.props.bikeInfo.model}</h1>
                <h3>Rented from: {this.props.renterPost.start_date} to {this.props.renterPost.end_date}</h3>
                <br />
                <button style={{
                    width: "150px"
                }}>Delete History</button>
                <br />
                <br />
                <hr />
            </div>
        </div>
    )
}
export default RentHistoryCard;