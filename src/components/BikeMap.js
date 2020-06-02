import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PostCard from './PostCard';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class BikeMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {
                lat: 30.4461,
                lng: -97.6240
            },
            zoom: 11
        }
      
    }

    setCenter(){
    //  console.log(this.props)
    }
    
    componentDidMount(){
      this.setCenter()
    }


    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '50%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBLOHplAvs-vJi5pNxpCTWTLI1JQKHIRaM" }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    {/* this needs to be the posts users lat long */} 
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default BikeMap;





// import React from 'react';
// import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
// import PostCard from './PostCard';


// function Map() {
//     return (
//             <GoogleMap
//                 defaultZoom={10}
//                 defaultCenter={{ lat: 30.267153, lng: -97.743057 }}
//             />
//     )
// }
// const WrappedMap = withScriptjs(withGoogleMap(Map))



// export default function BikeMap() {

//     return(
//         <div  
//         style={{
//             width: '100vw',
//             height: '100vh'
//         }}>

//             <WrappedMap 
//             googleMapURL={ `https://maps.googleapis.com/maps/api/js?v=3.exp&
//             libraries=geometry,drawing,places&key=AIzaSyBLOHplAvs-vJi5pNxpCTWTLI1JQKHIRaM` }
//               loadingElement={<div style={{ height: "100%" }} />}
//               containerElement={<div className="map" style={{ height: "100%" }} />}
//               mapElement={<div style={{ height: "90%", width: "50%" }} />}
//             />
//             <PostCard/>
//         </div>
//     )
// }