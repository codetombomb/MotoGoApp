import React, { Component } from 'react';
import axios from 'axios'
import MyBikeCard from './MyBikeCard';
import BikeCard from './BikeCard';

class MyGarage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myBikeHistory: [],
            myBikes: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/my_bikes_history", { withCredentials: true })
            .then(resp => {
                console.log(resp)
                this.setState({
                    myBikeHistory: [...resp.data.my_bike_posts],
                    myBikes: [...resp.data.my_bikes]
                })
            })
    }

    renderMyRentedBikes(){
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

    renderMyBikes(){
        return this.state.myBikes.map(bike => {
           return <BikeCard key={bike.created_at} bikeName={bike.bike_name} bikeYear={bike.year} bikeMake={bike.make} bikeModel={bike.model}/>
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
                        left: '50px',
                        textDecoration: "underline"
                    }}>My Bikes</h1>

                    {this.state.myBikes.length > 0 ? this.renderMyBikes() : <h2>I do not have any bikes listed on MotoGO</h2>}
                    <hr/>
                    <h1 style={{
                        fontSize: "40px",
                        position: "relative",
                        left: '50px',
                        textDecoration: "underline"
                    }}>My Bike's Rental History</h1>
                    {this.state.myBikeHistory.length > 0 ? this.renderMyRentedBikes() : <h2>My bikes have not been rented yet.</h2>}
                </div>
            </div>
        )
    }
}
export default MyGarage;