
import HeroSection from '../components/HeroSection';
import Places from '../components/Places';
import SignUp from '../components/SignUp';

import matterhornImg from '../assets/images/matterhorn.jpg';
import homeVideo from '../assets/videos/home.mp4';

const HomePage = (props) => {
    return (
        <>
            <HeroSection 
                poster={matterhornImg}
                video={homeVideo}
                title='MOUNTAINS AWAIT!'
                subtitle='So, what are you waiting for?' 
                link='/mountains/places/matterhorn'
                linkPlace='Matterhorn'
                linkVideo='https://www.youtube.com/watch?v=VA0QopkQYjY'
            />
            <Places />
            <SignUp />
        </>
    )
};

export default HomePage;