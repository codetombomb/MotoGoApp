/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import MotoLogo from '../style/images/moto-logo.png'

const style = {
    width: '50%',
    height: '75%',
    marginTop: '43px'
    
}

export class BikeMapTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            // allPosts: []
        }

    }
  

    displayMarkers(){
         return this.props.posts.map((post,index) => {
            return <Marker 
            key={index} 
            position={{
                lat: post.owner.lat,
                lng: post.owner.lon
            }}
            icon={{
                url: MotoLogo,
                scaledSize: new google.maps.Size(60,60)
            }}
            onClick={() => this.props.handleBikeMapMarkerClick(post)} 
            />
        })
    }

    render() {
        return (
            <div className="bikeMap">
            <Map
                google={this.props.google}
                style={style}
                zoom={5}
                initialCenter={{lat: 37.0902, lng: -95.7129}}
            >
            {this.displayMarkers()}
            </Map>
            </div>

        )
    }
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyBLOHplAvs-vJi5pNxpCTWTLI1JQKHIRaM"
})(BikeMapTwo);


