import React, { useState } from 'react';


const RentBikePage = (props) => {
    // const [showForm, setToggleForm] = useState(false);
 


    return (
        <div>
            <img className="postShowImg" src="https://thumpertalk.com/applications/core/interface/imageproxy/imageproxy.php?img=http://www.zeta-racing.com/bikes/images/drz/pz04.jpg&key=c5a35e44fa9087e1d4b2c043c44ad31aebacf93a990c19b99211306a8adb18c3" alt="Avatar" />
            <div className="bikeShowDesc" style={{
                fontSize: '12px',
            }}>
                <h1 style={{
                    textDecoration: "underline"
                }}><b>{props.bikeYear} {props.bikeMake} {props.bikeModel}</b></h1>
                <br />
                <br />
                <p style={{
                    fontSize: '25px'
                }}>
                    {props.bikeDescription}
                </p>
            </div>
            <h1 id="price">${props.price}/day</h1>
            <button onClick={props.handleClickRent(props)}>Rent Bike</button>
        </div>
    )

}
export default RentBikePage;