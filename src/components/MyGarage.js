import React, { Component } from 'react';
import axios from 'axios'
import MyBikeCard from './MyBikeCard';

class MyGarage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myBikeHistory: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/my_bikes_history", { withCredentials: true })
            .then(resp => {
                console.log(resp)
                // debugger
                this.setState({
                    myBikeHistory: [...resp.data.my_bike_posts]
                })
            })
    }

    renderMyBikes(){
        return this.state.myBikeHistory.map(bike => {
            return <MyBikeCard key={bike.bike.created_at} bikeInfo={bike.bike} postInfo={bike.post} renterInfo={bike.renter} renterPost={bike.renter_post} />
        })
    }



    render() {
        return (
            <div>
                <div style={{
                    position: "relative",
                    padding: "25px",
                    top: "30px",
                    left: "30px"
                }}>
                    <h1>My Bikes</h1>
                    {this.renderMyBikes()}
                </div>
            </div>
        )
    }
}
export default MyGarage;