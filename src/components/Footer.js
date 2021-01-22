import '../styles/Footer.css';
import {Link, BrowserRouter as Router} from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
            <p>Touch Mountain © 2021</p>
            <div className='social-icons'>
                <Router>
                    <Link 
                        className='social-icon-link fb'
                        to='/'
                        target='_blank'
                        arial-label='facebook'>
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link 
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        rial-label='instagram'>
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link 
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        arial-label='twitter'>
                        <i className='fab fa-twitter'></i>
                    </Link>
                    <Link 
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        arial-label='youtube'>
                        <i className='fab fa-youtube'></i>
                    </Link>
                </Router>
            </div>
        </footer>
    )
};

export default Footer;