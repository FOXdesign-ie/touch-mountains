import HeroSection from '../components/HeroSection';
import '../styles/Places.css';
import Place from '../components/Place';
import SignUp from '../components/SignUp';

// images
import matterhornImg from '../assets/images/matterhorn.jpg'; 
import karakoramImg from '../assets/images/Karakoram.jpg';
import machuPicchuImg from '../assets/images/machu2.jpg';
import nangaParbatImg from '../assets/images/nanga-parbat.jpg';
import eigerImg from '../assets/images/eiger.jpg';

import machuPicchu2Img from '../assets/images/machu.jpg';
import placeVideo from '../assets/videos/places.mp4';

const PlacesPage = () => {
    return(
        <>
            <HeroSection 
                poster={machuPicchu2Img}
                video={placeVideo}
                title='AWESOME PLACES'
                subtitle='Alps, Karakoram, Himalayas or Andes?' 
                link='/mountains/places/machu-picchu'
                linkPlace='Machu Picchu'
                linkVideo='https://www.youtube.com/watch?v=cnMa-Sm9H4k'
            />
            <div className='places'>
                <h1>Check out these amazing places! </h1>
                <div className='places__container'>
                    <div className='places__wrapper'>
                        <ul className='places__items'>
                            <Place
                                src={matterhornImg}
                                text='Matterhorn - Zermatt'
                                label='Switzerland'
                                path='/places/matterhorn'
                            />
                            <Place 
                                src={karakoramImg}
                                text='Karakoram Highway'
                                label='Pakistan'
                                path='/places/karakoram'
                            />
                            <Place
                                src={machuPicchuImg}
                                text='Machu Picchu - Cuzco Region'
                                label='Peru'
                                path='/places/machu-picchu'
                            />
                            <Place 
                                src={nangaParbatImg}
                                text='Nanga Parbat - base camp'
                                label='Pakistan'
                                path='places/nanga-parbat'
                            />
                            <Place
                                src={eigerImg}
                                text='Eiger - Grindelwald '
                                label='Switzerland'
                                path='places/eiger'
                            />   
                        </ul>
                    </div>
                </div>
            </div>
            <SignUp />  
        </>
    )
};

export default PlacesPage;