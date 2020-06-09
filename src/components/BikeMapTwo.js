/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import MotoLogo from '../style/images/moto-logo.png'

const style = {
    width: '50%',
    height: '75%',
    
}

export class BikeMapTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            allPosts: [
                {latitude: 30.4394, longitude: -97.62, userId: 1},
                {latitude: 47.6339, longitude: -122.3476, userId: 2},
                {latitude: 35.6895, longitude: 139.6917, userId: 3},
                {latitude: 53.9576, longitude: -1.0827, userId: 4},
                {latitude: 33.3807, longitude: -84.7997, userId: 5},
                {latitude: 34.0522, longitude: -118.2437, userId: 6},
                {latitude: 43.3862, longitude: -79.8371, userId: 7},
                {latitude: 30.4461, longitude: -97.624, userId: 8},
                {latitude: 40.7091, longitude: -112.1016, userId: 9},
                {latitude: 30.4461, longitude: -97.624, userId: 10},
                {latitude: 36.0512, longitude: -78.8577, userId: 11},
                ]
        }

    }
    componentDidMount() {
        let user = this.props.user
        this.setState({
            user: user
            // allPosts: [...allPosts]
        })
    }

    displayMarkers(){
         return this.state.allPosts.map((post,index) => {
            return <Marker 
            id={index}
            key={post.userId} 
            position={{
                lat: post.latitude,
                lng: post.longitude
            }}
            icon={{
                url: MotoLogo,
                scaledSize: new google.maps.Size(40,40)
            }}
            onClick={() => this.props.handleSelectedBike(post, this.props.history)} 
            />
        })
    }

    render() {
        return (
            <div className="bikeMap">
            <Map
                google={this.props.google}
                style={style}
                zoom={3.56}
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




// 0
// {latitude: 30.4394, longitude: -97.62, userId: 1}

// 1
// {latitude: 47.6339, longitude: -122.3476, userId: 2}

// 2
// {latitude: 35.6895, longitude: 139.6917, userId: 3}

// 3
// {latitude: 53.9576, longitude: -1.0827, userId: 4}

// 4
// {latitude: 33.3807, longitude: -84.7997, userId: 5}

// 5
// {latitude: 34.0522, longitude: -118.2437, userId: 6}

// 6
// {latitude: 43.3862, longitude: -79.8371, userId: 7}

// 7
// {latitude: 30.4461, longitude: -97.624, userId: 8}

// 8
// {latitude: 40.7091, longitude: -112.1016, userId: 9}

// 9
// {latitude: 30.4461, longitude: -97.624, userId: 10}

// 10
// {latitude: 36.0512, longitude: -78.8577, userId: 11}