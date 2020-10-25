import React from 'react'
import './Hero.css'
import Button from './Button'

import LeftArrow from '../images/iconfinder_arrow-left-01_186410.png'
import RightArrow from '../images/iconfinder_arrow-right-01_186410.png'

export default function Hero() {
    // additional styling
    const button = {
        // margin: 'auto',
        margin: '50px auto auto',
        display: 'block'
    }

    return (
        <div className='hero'>
            <div className='hero-overlay'>
                <img id='home-page-nav-left' alt='left navigation arrow' src={LeftArrow} />
                <img id='home-page-nav-right' alt='right navigation arrow' src={RightArrow} />
                <h1 className='title'>Sofas</h1>
                <div>
                    <Button style={button} text='Buy Now'/>
                </div>
            </div>
        </div>
    )

}
