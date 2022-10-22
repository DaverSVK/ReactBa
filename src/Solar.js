import React from 'react'
import HomeSolar from './components/solar/HomeSolar'
import NavbarSolar from './components/solar/NavbarSolar'
import AboutSolar from './components/solar/AboutSolar'
function Solar(){
    return(
        <div>
            <NavbarSolar/>
            <HomeSolar/>
            <AboutSolar/>
        </div>
    );
}
export default Solar;