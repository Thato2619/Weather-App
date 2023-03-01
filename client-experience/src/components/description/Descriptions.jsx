import React from 'react'
import './descriptions.css';
import {faArrowDown} from "react-icons/fa";

const Descriptions = () => {
  return (
    <div className='section section__descriptions'>
        <div className='card'>
            <div className='description__card-icon'>
                <faArrowDown />
                <small>min</small>
            </div>
            <h2>32°C</h2>
        </div>
    </div>
  )
}

export default Descriptions