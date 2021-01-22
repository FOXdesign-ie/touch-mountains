import HeroSection from '../components/HeroSection';
import SignUp from '../components/SignUp';
import '../styles/About.css';

import AboutImg from '../assets/images/eiger.jpg';
import eigerImg from '../assets/images/eiger2.jpg';
import aboutVideo from '../assets/videos/about.mp4';

const AboutPage = () => {
    return(
        <>
            <HeroSection 
                poster={eigerImg}
                video={aboutVideo}
                title='ABOUT US'
                subtitle='Who are we and why are you here?' 
                link='/mountains/places/eiger'
                linkPlace='Eiger'
                linkVideo='https://www.youtube.com/watch?v=8hdJPC49S-4'
            />

            <div className='about'>
                <h2>We are passionate about mountains.<br/> We <i class="far fa-heart"></i> them.</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                <div className='about-icons'>
                    <div className='about-icons--item'> 
                        <i class="fas fa-hiking"></i>
                        <h3>Mountain Hiking</h3>
                    </div>
                    <div className='about-icons--item'> 
                        <i class="fas fa-mountain"></i>
                        <h3>Mountain Peaks</h3>
                    </div> 
                    <div className='about-icons--item'> 
                        <i class="fas fa-campground"></i>
                        <h3>Mountain Camping</h3>
                    </div> 
                    <div className='about-icons--item'> 
                        <i class="fas fa-icicles"></i>
                        <h3>Mountain Climbing</h3>
                    </div> 
                    {/* <div className='about-icons--item'> 
                        <i class="far fa-snowflake"></i>
                        <h3>Brisk, fresh air</h3>
                    </div>  */}
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
                <img src={AboutImg} alt='#' />
            </div>
            <SignUp />  
        </>
    )
};

export default AboutPage;


