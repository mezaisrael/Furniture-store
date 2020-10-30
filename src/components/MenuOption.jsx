import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function MenuOption(props) {
  const [isMouseOver, setMouseOver] = useState(false)

  const mStyle = {
    dropDown: {
      padding: '20px'
    }
  }

  const handleMouseEvent = (event) => {
    event.preventDefault()
    setMouseOver(!isMouseOver)
  }
    
  const categoryItems = props.categoryOptions.map((item, i) => {
    return <li key={i}>
      <Link to={item}>{item}</Link>
        </li>
  })

  return (
    <li
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}>
      <Link>{props.category}</Link>
      <ul className={ isMouseOver? 'sub-nav-menu' : 'hide'} style={mStyle.dropDown}>
        {categoryItems}
      </ul> 
    </li>
  )
}
