import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <nav className="navbar ">
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link to='./home' className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='./student' className="nav-link" href="#">Student</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='./contactus' className="nav-link" href="#">Contact Us</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>

    </div>
  )
}

export default Header