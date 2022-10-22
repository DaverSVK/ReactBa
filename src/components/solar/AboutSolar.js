import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './AboutSolar.css'
import { Button } from 'rsuite';
import Controler from "../../Controler";




const About = () => {
  const [dataForm, setdataForm] = useState([]);

  useEffect(() => {
    Controler.postRe().then((response) => {
      setdataForm(response.data);
    });
  });
  const [filteredDistrict, setFilteredDistrict] = useState('');
  const [filteredPart, setFilteredPart] = useState('');

  const filterDistrictChangeHandler = (event) => {
    setFilteredDistrict(event.target.value);
    };
  
  const filterPartChangeHandler = (event) => {
      setFilteredPart(event.target.value);
      };
    // const data = [
    //     {
    //       name: 'Page A',
    //       uv: 4000,
    //       pv: 2400,
    //       amt: 2400,
    //     },
    //     {
    //       name: 'Page B',
    //       uv: 3000,
    //       pv: 1398,
    //       amt: 2210,
    //     },
    //     {
    //       name: 'Page C',
    //       uv: 2000,
    //       pv: 9800,
    //       amt: 2290,
    //     },
    //     {
    //       name: 'Page D',
    //       uv: 2780,
    //       pv: 3908,
    //       amt: 2000,
    //     },
    //     {
    //       name: 'Page E',
    //       uv: 1890,
    //       pv: 4800,
    //       amt: 2181,
    //     },
    //     {
    //       name: 'Page F',
    //       uv: 2390,
    //       pv: 3800,
    //       amt: 2500,
    //     },
    //     {
    //       name: 'Page G',
    //       uv: 3490,
    //       pv: 4300,
    //       amt: 2100,
    //     },
    //   ];
    return (
        <div className='about__solar' id='about'>
            <div className='container'>
                <h2>Data sources:</h2>
                <p>:::data_souses:::</p>
                <div className='drop__down'>
                <div className='expenses-filter'>
                    <div className='expenses-filter__control'>
                        <label>District:</label>
                        <select value={filteredDistrict} onChange={filterDistrictChangeHandler}>
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
                        {filteredDistrict === "Bratislava I" &&<option value='Staré Mesto'>Staré Mesto</option>}
                        {filteredDistrict === "Bratislava II" &&<option value='Ružinov'>Ružinov</option>}
                        {filteredDistrict === "Bratislava II" &&<option value='Vrakuňa'>Vrakuňa</option>}
                        {filteredDistrict === "Bratislava II" &&<option value='Podunajské Biskupice'>Podunajské Biskupice</option>}
                        {filteredDistrict === "Bratislava III" &&<option value='Nové Mesto'>Nové Mesto</option>}
                        {filteredDistrict === "Bratislava III" &&<option value='Rača'>Rača</option>}
                        {filteredDistrict === "Bratislava III" &&<option value='Vajnory'>Vajnory</option>}
                        {filteredDistrict === "Bratislava IV" &&<option value='Karlova Ves'>Karlova Ves</option>}
                        {filteredDistrict === "Bratislava IV" &&<option value='Dúbravka'>Dúbravka</option>}
                        {filteredDistrict === "Bratislava IV" &&<option value='Lamač'>Lamač</option>}
                        {filteredDistrict === "Bratislava IV" &&<option value='Devín'>Devín</option>}
                        {filteredDistrict === "Bratislava IV" &&<option value='Devínska Nová Ves'>Devínska Nová Ves</option>}
                        {filteredDistrict === "Bratislava IV" &&<option value='Záhorská Bystrica'>Záhorská Bystrica</option>}
                        {filteredDistrict === "Bratislava V" &&<option value='Petržalka'>Petržalka</option>}
                        {filteredDistrict === "Bratislava V" &&<option value='Jarovce'>Jarovce</option>}
                        {filteredDistrict === "Bratislava V" &&<option value='Rusovce'>Rusovce</option>}
                        {filteredDistrict === "Bratislava V" &&<option value='Čunovo'>Čunovo</option>}
                        </select>
                    </div>
                </div>
                  
                <button className='button'onClick={Controler.postRe({
                  region: filteredDistrict,
                  cityPart: filteredPart,
                })}>Vyhladať</button>
                </div>
            </div>
            <div className='graph'>
                <h3>Graph</h3>
                <span className='line'></span>
                <LineChart width={1200} height={400} data={dataForm}
                margin={{ top: 50, right: 30, left: 180, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="rain" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    )
}

export default About