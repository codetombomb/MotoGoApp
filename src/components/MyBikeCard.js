import React, { Component } from 'react';

class MyBikeCard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <img alt="bike-image" src="https://thumpertalk.com/applications/core/interface/imageproxy/imageproxy.php?img=http://www.zeta-racing.com/bikes/images/drz/pz04.jpg&key=c5a35e44fa9087e1d4b2c043c44ad31aebacf93a990c19b99211306a8adb18c3"/>
            </div>
        )
    }
}
export default MyBikeCard;