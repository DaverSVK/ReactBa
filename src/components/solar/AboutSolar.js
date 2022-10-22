import React, { useState } from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './AboutSolar.css'

const About = () => {
  const [filteredDistrict, setFilteredDistrict] = useState('');

  const filterChangeHandler = (event) => {
    setFilteredDistrict(event.value);
    if(filteredDistrict !== 'Bratislava I'){
      console.log(filteredDistrict);
    };
  };
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div className='about__solar' id='about'>
            <div className='container'>
                <h2>Data sources:</h2>
                <p>:::data_souses:::</p>
                <div className='drop__down'>
                <div className='expenses-filter'>
                    <div className='expenses-filter__control'>
                        <label>District:</label>
                        <select value={filteredDistrict} onChange={filterChangeHandler}>
                        <option value='Bratislava I'>Bratislava I</option>
                        <option value='Bratislava II'>Bratislava II</option>
                        <option value='Bratislava III'>Bratislava III</option>
                        <option value='Bratislava IV'>Bratislava IV</option>
                        <option value='Bratislava V'>Bratislava V</option>
                        </select>
                    </div>
                </div>
                {filteredDistrict === "Bratislava V" &&<div className='expenses-filter'>
                    <div className='expenses-filter__control'>
                        <label>Part:</label>
                        <select >
                        <option value='Staré Mesto'>Staré Mesto</option>
                        <option value='Ružinov'>Ružinov</option>
                        <option value='Vrakuňa'>Vrakuňa</option>
                        <option value='Podunajské Biskupice'>Podunajské Biskupice</option>
                        <option value='Nové Mesto'>Nové Mesto</option>
                        <option value='Rača'>Rača</option>
                        <option value='Vajnory'>Vajnory</option>
                        <option value='Karlova Ves'>Karlova Ves</option>
                        <option value='Dúbravka'>Dúbravka</option>
                        <option value='Lamač'>Lamač</option>
                        <option value='Devín'>Devín</option>
                        <option value='Devínska Nová Ves'>Devínska Nová Ves</option>
                        <option value='Záhorská Bystrica'>Záhorská Bystrica</option>
                        <option value='Petržalka'>Petržalka</option>
                        <option value='Jarovce'>Jarovce</option>
                        <option value='Rusovce'>Rusovce</option>
                        <option value='Čunovo'>Čunovo</option>
                        </select>
                    </div>
                </div>}
                  
                </div>
            
            </div>
            <div className='graph'>
                <h3>Graph</h3>
                <span className='line'></span>
                <LineChart width={1200} height={400} data={data}
                margin={{ top: 50, right: 30, left: 180, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    )
}

export default About