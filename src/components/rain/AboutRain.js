import React, { useEffect, useState } from "react";
import { Label, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './AboutRain.css'
import { Button } from 'rsuite';
import Controler from "../../Controler2";
import MapPick from '../images/Karlova-ves.png'


const About = () => {
  var data = [];
  const [dataForm, setdataForm] = useState([]);
  const [filteredDistrict, setFilteredDistrict] = useState('None');
  const [filteredPart, setFilteredPart] = useState('None');
  
  useEffect(() => {
    setdataForm([]);
  },[]);


  const filterDistrictChangeHandler = (event) => {
    setFilteredDistrict(event.target.value);
    setFilteredPart('None');
    };
  
  const filterPartChangeHandler = (event) => {
      setFilteredPart(event.target.value);
      };
  const  handleClick = async () => {
        data = await Controler.postRe({
          region: filteredDistrict,
          cityPart: filteredPart
        });
        setdataForm(data.data["content"])
        console.log(dataForm);
        
      };
      
    return (
        <div className='about__rain' id='about'>
            <div className='container'>
                <h2>Data sources:</h2>
                <p>:::data_souses:::</p>
                <div className='drop__down'>
                <div className='expenses-filter'>
                    <div className='expenses-filter__control'>
                        <label>District:</label>
                        <select value={filteredDistrict} onChange={filterDistrictChangeHandler}>
                        <option value='None'>None</option>
                        <option value='Bratislava I'>Bratislava I</option>
                        <option value='Bratislava II'>Bratislava II</option>
                        <option value='Bratislava III'>Bratislava III</option>
                        <option value='Bratislava IV'>Bratislava IV</option>
                        <option value='Bratislava V'>Bratislava V</option>
                        </select>
                    </div>
                </div>
                <div className='expenses-filter'>
                    <div className='expenses-filter__control'>
                        <label>Part:</label>
                        <select value={filteredPart} onChange={filterPartChangeHandler}>
                        <option value='None'>None</option>
                        {filteredDistrict === "Bratislava I" &&<option value='Star?? Mesto'>Star?? Mesto</option>}
                        {filteredDistrict === "Bratislava II" &&<option value='Ru??inov'>Ru??inov</option>}
                        {filteredDistrict === "Bratislava II" &&<option value='Vraku??a'>Vraku??a</option>}
                        {filteredDistrict === "Bratislava II" &&<option value='Podunajsk?? Biskupice'>Podunajsk?? Biskupice</option>}
                        {filteredDistrict === "Bratislava III" &&<option value='Nov?? Mesto'>Nov?? Mesto</option>}
                        {filteredDistrict === "Bratislava III" &&<option value='Ra??a'>Ra??a</option>}
                        {filteredDistrict === "Bratislava III" &&<option value='Vajnory'>Vajnory</option>}
                        {filteredDistrict === "Bratislava IV" &&<option value='Karlova Ves'>Karlova Ves</option>}
                        {filteredDistrict === "Bratislava IV" &&<option value='D??bravka'>D??bravka</option>}
                        {filteredDistrict === "Bratislava IV" &&<option value='Lama??'>Lama??</option>}
                        {filteredDistrict === "Bratislava IV" &&<option value='Dev??n'>Dev??n</option>}
                        {filteredDistrict === "Bratislava IV" &&<option value='Dev??nska Nov?? Ves'>Dev??nska Nov?? Ves</option>}
                        {filteredDistrict === "Bratislava IV" &&<option value='Z??horsk?? Bystrica'>Z??horsk?? Bystrica</option>}
                        {filteredDistrict === "Bratislava V" &&<option value='Petr??alka'>Petr??alka</option>}
                        {filteredDistrict === "Bratislava V" &&<option value='Jarovce'>Jarovce</option>}
                        {filteredDistrict === "Bratislava V" &&<option value='Rusovce'>Rusovce</option>}
                        {filteredDistrict === "Bratislava V" &&<option value='??unovo'>??unovo</option>}
                        </select>
                    </div>
                </div>
                  
                <button className='button'onClick={handleClick}>Search</button>
                </div>
            </div>
            <div className='graph'>
                <h3>Graph</h3>
                <span className='line'></span>
                <LineChart width={1200} height={400} data={dataForm}
                margin={{ top: 50, right: 30, left: 180, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Year', angle: 0, position: 'bottom' }}/>
                <YAxis dataKey="rain"label={{ value: 'Duration of sunshine per year [hour]',offset: 2, angle: -90, position: 'insideBottomLeft' }}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="rain" stroke="#8884d8" />
                </LineChart>
            </div>
            <div className='heading'>
              <h2>Map</h2>
            </div>
            <div className='container2'>
              
            </div>
        </div>
    )
}

export default About