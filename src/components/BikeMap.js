import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class BikeMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {
                lat: 36.5320,
                lng: 140.2254
            },
            zoom: 11,
            userCenter: {},
            markerList: []
        }
    }

    componentDidMount() {
        this.setCenter()
        this.setMarkerList()
    }

    setMarkerList() {
        let markers = []
        this.props.posts.map(post => {
            if(post.owner.lat){
            var x = post.owner.lat
            } else {
                var x = 30.2672
            }
            if(post.owner.lon){
            var y = post.owner.lon
            } else {
                var y = 97.7431
            }
            let coords = {lat: x, lng: y}
            markers.push(coords)
        })
        this.setState({
            markerList: [...markers]
        })
    }

    setCenter() {
        let newCenter = { lat: 36.5320, lng: 140.2254 }
        console.log(newCenter)
        this.setState({
            userCenter: { lat: this.props.user.lat, lng: this.props.user.lon }
        })
    }


    render() {

        return (

            // Important! Always set the container height explicitly
            <div className="bikeMap">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBLOHplAvs-vJi5pNxpCTWTLI1JQKHIRaM" }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                    center={this.state.userCenter}
                >
                    {/* this needs to be the posts users lat long */}
                    
                </GoogleMapReact>

            </div>
        );
    }
}

export default BikeMap;
