import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import MenuOption from './MenuOption'

export default function NavBar() {
    //TODO use vanilla js to get dom elemnt sub-menu and make it
    // visible on hover
// document.getElementById("MyElement").className = "MyClass"; 
    const handleMouseEvent = (event) => {
        console.log("hello")
        document.getElementsByClassName("sub-nav-menu").className += " hide";
    }

    return (
        <nav className='nav-bar'>
            <div className='nav-bar-top container'>
                <Link to='/' className='logo'>
                    Furniture
                </Link>
                <div>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i> 
                </div>
            </div>
            <div className='nav-options'>
                <ul className='container'>
                    <MenuOption
                        category={'bedroom'}
                        categoryOptions={['Mattress', 'bed', 'dresser', 'night stand']} />
                    <MenuOption
                        category={'kitchen'}
                        categoryOptions={['dining table', 'cabinets']} />
                        
                    <MenuOption
                        category={'office'}
                        categoryOptions={['chair', 'desk']}/>
                    <MenuOption
                        category={'living room'}
                        categoryOptions={['tv stand', 'sofa', 'coffee table']} />
                </ul>
            </div>
        </nav>
    )
}
