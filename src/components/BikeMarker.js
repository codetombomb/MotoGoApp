import React, { Component } from 'react';
import MotoGoLogo from '../style/images/moto-logo.png'

class BikeMarker extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <img src={MotoGoLogo} />
            </div>
        )
    }
}
export default BikeMarker;