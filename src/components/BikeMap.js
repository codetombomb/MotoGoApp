// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import BikeMarker from './BikeMarker'

// class BikeMap extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             center: {
//                 lat: 36.5320,
//                 lng: 140.2254
//             },
//             zoom: 11,
//             userCenter: {},
//             markerList: []
//         }
//     }

//     componentDidMount() {
//         // debugger
//         this.setCenter()
//         // this.setMarkerList()
//     }

//     setMarkerList() {
//         let markers = []
//         // debugger
//         this.props.posts.map(post => {
//             if (post.owner.lat) {
//                 var x = post.owner.lat
//             } else {
//                 var x = 30.2672
//             }
//             if (post.owner.lon) {
//                 var y = post.owner.lon
//             } else {
//                 var y = 97.7431
//             }
//             let id = post.owner.id
//             let coords = { lat: x, lng: y, ownerId: id }
//             markers.push(coords)
//         })
//         this.setState({
//             markerList: [...markers]
//         })
//     }

//     setCenter() {
//         let newCenter = { lat: 36.5320, lng: 140.2254 }
//         console.log(newCenter)
//         this.setState({
//             userCenter: { lat: this.props.user.lat, lng: this.props.user.lon }
//         })
//     }

//     // renderMarkers() {
//     //   debugger
//     // }



//     render() {

//         return (

//             // Important! Always set the container height explicitly
//             <div className="bikeMap">
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: "AIzaSyBLOHplAvs-vJi5pNxpCTWTLI1JQKHIRaM" }}
//                     defaultCenter={this.state.center}
//                     defaultZoom={this.state.zoom}
//                     center={this.state.userCenter}
//                 >
                    
//                 {/* <BikeMarker lat={this.state.userCenter.lat} lng={this.state.userCenter.lng}/> */}
//                 {this.props.posts.forEach(post => {
//                     console.log(post);
//                     <BikeMarker id={post.owner.id} lat={post.owner.lat} lng={post.owner.lon} />
//                 })}
                
                    


//                 </GoogleMapReact>

//             </div>
//         );
//     }
// }

// export default BikeMap;
