//This is where the user will fill out details about the bike that they are going to post.
// Starting with Year, Make, Model, Miles, License Plate, Bike name, Category

import React, { Component } from 'react';
import axios from 'axios'

class CreateBike extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: "",
            year: "",
            make: "",
            model: "",
            miles: "", 
            license_plate: "",
            bike_name: "",
            category: "",
            // photos: [],
            createBikeErrors: ""
        }
        this.handleChangeBikeState = this.handleChangeBikeState.bind(this);

    }
 
    handleChangeBikeState(event) {
        event.preventDefault()
        console.log(event.target.name)
        console.log(event.target.value)

        this.setState({
          [event.target.name]: event.target.value
        });
    }


    handleSubmit = event => {
        const {year, make, model, miles, license_plate, bike_name, category, photos} = this.state
        // const user = this.state.currenUser.id
        axios
        .post(
            "http://localhost:3001/bikes",
            {
                bike: {
                    year: year,
                    make: make, 
                    model: model, 
                    miles: miles,
                    license_plate: license_plate,
                    bike_name: bike_name,
                    category: category,
                    // photos: photos
                }
                
            },
            {withCredentials: true}
        )
        .then(response => {
            console.log(response)
        })
        event.preventDefault();
    }





    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input
                    type="year"
                    name="year"
                    placeholder="Year"
                    value={this.state.year}
                    onChange={this.handleChangeBikeState}
                    required
                    />

                    <input
                    type="make"
                    name="make"
                    placeholder="Make"
                    value={this.state.make}
                    onChange={this.handleChangeBikeState}
                    required
                    />

                    <input
                    type="model"
                    name="model"
                    placeholder="Model"
                    value={this.state.model}
                    onChange={this.handleChangeBikeState}
                    required
                    />

                    <input
                    type="miles"
                    name="miles"
                    placeholder="Miles"
                    value={this.state.miles}
                    onChange={this.handleChangeBikeState}
                    required
                    />

                    <input
                    type="license_plate"
                    name="license_plate"
                    placeholder="License Plate No."
                    value={this.state.license_plate}
                    onChange={this.handleChangeBikeState}
                    required
                    />

                    <input
                    type="bike_name"
                    name="bike_name"
                    placeholder="Bike Name"
                    value={this.state.bike_name}
                    onChange={this.handleChangeBikeState}
                    // required
                    />

                    <input
                    type="category"
                    name="category"
                    placeholder="Category"
                    value={this.state.category}
                    onChange={this.handleChangeBikeState}
                    // required
                    />

                    <input
                    type=""
                    name=""
                    placeholder="Photos"
                    value={this.state.value}
                    onChange={this.handleChangeBikeState}
                    // required
                    />

                    <button type="submit">Create Bike</button>

                </form>
            </div>
        )
    }
}
export default CreateBike;