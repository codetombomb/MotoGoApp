import React, { Component } from 'react';
import axios from 'axios'
import PostShowPage from './PostShowPage'

class CreateBikePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            year: "",
            make: "",
            model: "",
            miles: "",
            license_plate: "",
            bike_name: "",
            category: "",
            cost_per_day: "",
            description: "",
            // photos: [],
            createBikeErrors: "",
            showBike: false

        }
        this.handleChangeBikeState = this.handleChangeBikeState.bind(this);

    }

    handleChangeBikeState(event) {
        event.preventDefault()
        // console.log(event.target.name)
        // console.log(event.target.value)

        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleSubmit = event => {
        const { year, make, model, miles, license_plate, bike_name, category, cost_per_day, description } = this.state
        axios
            .post(
                "http://localhost:3001/posts",
                {
                    user: this.props.currentUser,
                    bike: {
                        year: year,
                        make: make,
                        model: model,
                        miles: miles,
                        license_plate: license_plate,
                        bike_name: bike_name,
                        category: category,
                        cost_per_day: cost_per_day,
                        description: description,
                        // photos: photos
                    }

                },
                { withCredentials: true }
            )
            .then(response => {
                this.toggleBikeShow()
            })
        event.preventDefault();
    }

    toggleBikeShow(){
        this.setState({
            showBike: !this.state.showBike
        })
    }   

    render() {
        return (
            <div>
                {this.state.showBike ? 
                <PostShowPage 
                year={this.state.year}
                make={this.state.make}
                model={this.state.model}
                miles={this.state.miles}
                description={this.state.description}
                price={this.state.cost_per_day}
                
                /> : 
                <form onSubmit={this.handleSubmit} className="createBike">

                    <input
                        type="year"
                        name="year"
                        placeholder="Year"
                        value={this.state.year}
                        onChange={this.handleChangeBikeState}
                        required
                    />

                    <select
                        type="make"
                        name="make"
                        // defaultValue="AJS"
                        value={this.state.make}
                        onChange={this.handleChangeBikeState}
                    >
                        <option value="AJS">AJS</option>
                        <option value="Aprilia">Aprilia</option>
                        <option value="Arctic Cat">Arctic Cat</option>
                        <option value="Ariel">Ariel</option>
                        <option value="Benelli">Benelli</option>
                        <option value="Beta">Beta</option>
                        <option value="Bimota">Bimota</option>
                        <option value="BMW">BMW</option>
                        <option value="Cagiva">Cagiva</option>
                        <option value="CCM">CCM</option>
                        <option value="Daelim">Daelim</option>
                        <option value="Derbi">Derbi</option>
                        <option value="DKW">DKW</option>
                        <option value="Ducati">Ducati</option>
                        <option value="Enfield">Enfield</option>
                        <option value="GAS GAS">GAS GAS</option>
                        <option value="Gilera">Gilera</option>
                        <option value="Harley-Davidson">Harley-Davidson</option>
                        <option value="Hercules">Hercules</option>
                        <option value="Honda">Honda</option>
                        <option value="Husaberg">Husaberg</option>
                        <option value="Husqvarna">Husqvarna</option>
                        <option value="Hyosung">Hyosung</option>
                        <option value="Indian">Indian</option>
                        <option value="Kawasaki">Kawasaki</option>
                        <option value="Keeway">Keeway</option>
                        <option value="Kreidler">Kreidler</option>
                        <option value="KTM">KTM</option>
                        <option value="Kymco">Kymco</option>
                        <option value="Norton">Norton</option>
                        <option value="NSU">NSU</option>
                        <option value="Peugeot">Peugeot</option>
                        <option value="PGO">PGO</option>
                        <option value="Piaggio">Piaggio</option>
                        <option value="Polaris">Polaris</option>
                        <option value="Rieju">Rieju</option>
                        <option value="Sherco">Sherco</option>
                        <option value="Suzuki">Suzuki</option>
                        <option value="Sym">Sym</option>
                        <option value="TGB">TGB</option>
                        <option value="TM Racing">TM Racing</option>
                        <option value="Triumph">Triumph</option>
                        <option value="UM">UM</option>
                        <option value="Ural">Ural</option>
                        <option value="Veli">Veli</option>
                        <option value="Vespa">Vespa</option>
                        <option value="Victory">Victory</option>
                        <option value="Yamaha">Yamaha</option>
                        <option value="Zündapp">Zündapp</option>
                        <option value="Custom">Custom</option>
                        <option value="Other">Other</option>
                    </select>

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
                    <select
                        type="category"
                        name="category"
                        // defaultValue="Scooter"
                        value={this.state.category}
                        onChange={this.handleChangeBikeState}
                    >
                        <option value="Scooter">Scooter</option>
                        <option value="Sport">Sport</option>
                        <option value="Sport Touring">Sport Touring</option>
                        <option value="Cruiser">Cruiser</option>
                        <option value="Dual-Purpose">Dual-Purpose</option>
                        <option value="Off-Road">Off-Road</option>
                        <option value="Chopper">Chopper</option>
                        <option value="Custom">Custom</option>
                        <option value="Supermoto">Supermoto</option>
                        <option value="Track">Track</option>
                        <option value="Mini-Moto">Mini-Moto</option>
                        <option value="Trike">Trike</option>
                        <option value="Other">Other</option>

                    </select>
                   
                    <input
                        type="bike_name"
                        name="bike_name"
                        placeholder="Bike Name"
                        value={this.state.bike_name}
                        onChange={this.handleChangeBikeState}
                    // required
                    />


                    <input
                        type="number"
                        name="cost_per_day"
                        placeholder="Price/Day"
                        min="25"
                        value={this.state.cost_per_day}
                        onChange={this.handleChangeBikeState}
                    required
                    />

                    <textarea
                        type="text"
                        name="description"
                        placeholder="Give your bike an awesome description! Why should people want to rent this bike?"
                        value={this.state.description}
                        onChange={this.handleChangeBikeState}
                    />

                    <button type="submit">Submit</button>

                </form>
    }
            </div>
        )
    }
}
export default CreateBikePost;