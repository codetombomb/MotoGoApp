// import React from 'react';
// import TopNav from './TopNav'
// import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'


// function Map() {
//     return (
//             <GoogleMap
//                 defaultZoom={10}
//                 defaultCenter={{ lat: 30.267153, lng: -97.743057 }}
//             />
//     )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map))

// export default function FindABike() {

//     return(
//         <div  
//         style={{
//             width: '100vw',
//             height: '100vh'
//         }}>
            
//             <TopNav/>
//             <WrappedMap 
//             googleMapURL={ `https://maps.googleapis.com/maps/api/js?v=3.exp&
//             libraries=geometry,drawing,places&key=AIzaSyBLOHplAvs-vJi5pNxpCTWTLI1JQKHIRaM` }
//               loadingElement={<div style={{ height: "100%" }} />}
//               containerElement={<div className="map" style={{ height: "100%" }} />}
//               mapElement={<div style={{ height: "90%", width: "50%" }} />}
//             />
//         </div>
//     )
// }