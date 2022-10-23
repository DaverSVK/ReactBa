import React from 'react'
import HomeRain from './components/rain/HomeRain'
import NavbarRain from './components/rain/NavbarRain'
import AboutRain from './components/rain/AboutRain'
function Rain(){
    return(
        <div>
            <NavbarRain/>
            <HomeRain/>
            <AboutRain/>
        </div>
    );
}
export default Rain;