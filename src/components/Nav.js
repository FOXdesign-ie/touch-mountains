import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import '../styles/Nav.css';
import icon from '../assets/images/logo.png'

const Nav = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click); 
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    // display effect only once when it will be mounted
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="nav">
                <div className="nav-container">
                    <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
                        Touch Mountains
                        <img src={icon} alt='mountain icon'/>
                    </Link>
                    
                    {/* menu burger */}
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : 'fas fa-bars'} />
                    </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/places' className='nav-links' onClick={closeMobileMenu}>
                                    Places
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                    Contact
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                        {button && <Button buttonStyle='btn--outline'> Sign Up </Button> }
                    </div>
            </nav>
        </>
    )
};

export default Nav;


