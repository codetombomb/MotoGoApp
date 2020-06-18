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
                this.setState({
                    myBikeHistory: [...resp.data.my_bike_posts]
                })
            })
    }

    renderMyBikes(){
        return this.state.myBikeHistory.map((bike,index) => {

            return <MyBikeCard 
            key={index} 
            bikeInfo={bike.bike} 
            //renter stuff
            renterAvatar={bike.renter.avatar_url}
            renterFirstName={bike.renter.first_name}
            renterLastName={bike.renter.last_name}
            renterAddress={bike.renter.address}
            renterCity={bike.renter.city}
            renterEmail={bike.renter.email}
            renterPhone={bike.renter.phone_number}
            //post stuff
            postStartDate={bike.renter_post.start_date}
            postEndDate={bike.renter_post.end_date}
            postCost={bike.post.price_per_day}
            
            />
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
                    <h1 style={{
                        fontSize: "40px",
                        position: "relative",
                        left: '50px'
                    }}>My Bikes</h1>
                    {this.renderMyBikes()}
                </div>
            </div>
        )
    }
}
export default MyGarage;