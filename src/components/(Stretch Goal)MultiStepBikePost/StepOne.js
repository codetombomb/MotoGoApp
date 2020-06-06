import React, { useState } from 'react'

export default () => {
    const [year, setYear] = useState('')
    //   const [lastName, setLastName] = useState('')

    return (
        <div>
            <label>Year</label>
            <input
                type="year"
                name="year"
                placeholder="Year"
                onChange={e => setYear(e.target.value)}
                required
            />

            {/* <select
                        type="make"
                        name="make"
                        defaultValue="AJS"
                        onChange={e => setMake(e.target.value)}
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
                    /> */}
            {/* <div className='row'>
        <div className='six columns'>
          <label>First Name</label>
          <input
            className='u-full-width'
            placeholder='First Name'
            type='text'
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Last Name</label>
          <input
            className='u-full-width'
            placeholder='Last Name'
            type='text'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div> */}
        </div>
    )
}