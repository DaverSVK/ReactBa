import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='container-row'>
                    <div className='col-2'>
                            <h2>Solar light</h2>
                        <Link to="/solar">
                        <button className='button'>Explore</button>
                        </Link>
                    </div>
                    <div className='col-2'>
                        <h2>Rain intensity</h2>
                        <Link to="/rain"> 
                        <button className='button'>Explore</button>
                        </Link>
                    </div>
                   
                    <div className='col-2'>
                        <h2>Nature ratio</h2>
                        <button className='button'>Explore</button>
                    </div>
                    
                    <div className='col-2'>
                        <h2>Light polution</h2>
                        <button className='button'>Explore</button>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default About
