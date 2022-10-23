import React, { useState , useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import './Testimonials.css'
import { FilterOutlined } from '@material-ui/icons';
import FilterOut from '../filter/FilterOut';
import Controler3 from '../Controler3';

 
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Testimonials = () => {
    var data = [];
  const [dataForm, setdataForm] = useState([]);
  
  useEffect(() => {
    setdataForm([]);
  },[]);
    const options = ['Rain', 'Sunlight']
    const [checkValues,setCheckValues] = useState([]);
    const  handleClick = async () => {
        data = await Controler3.postRe({
          region: 'Bratislava IV',
          cityPart: 'Karlova ves',
          sunlight: true,
          rain: true
        });
        setdataForm(data.data["content"])
        console.log(dataForm);
        
      };

    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Check perspective places</h2>
                <span className='line'></span>
                <div className='content'>
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={options}
                        renderOption={(option, { selected }) => (
                        <React.Fragment>
                            <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                            />
                            {option}
                        </React.Fragment>
                        )}
                        style={{ width: 500 }}
                        renderInput={(params) => (
                        <TextField {...params} variant="outlined"
                            label="Checkboxes"
                            placeholder="Favorites" />
                        )}
                    />
                  
                    <button className='button' onClick={handleClick}>Search</button>
                </div>
                <div>
                <table className="app-table">
                    <thead>
                        <tr className="data-part">
                            <td ><h1>Region </h1></td>
                            <td ><h1>City part</h1></td>
                            <td ><h1>Sunlight</h1></td>
                            <td ><h1>Rain</h1></td>
                    
                        </tr>
                        </thead>
                        <tbody>
                        {dataForm.map((form) => {
                            return (
                            <FilterOut
                                key={form.cityPart}
                                region={form.region}
                                cityPart={form.cityPart}
                                sunlight={form.sunlight}
                                rain={form.rain}
                                
                            />
                            );
                        })}
                        </tbody>
                    </table>
                                    
                </div>
            </div>
        </div>
    )
}

export default Testimonials
