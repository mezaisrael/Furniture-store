import React from 'react'
import './Button.css'

export default function (props) {
    return (
        <button className='primary-button' style={props.style}>{props.text}</button>
    )
}
