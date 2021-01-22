import {useState, useEffect} from 'react';
// useHistory gives us info about where we are (url, location, pathname, etc). We can compare if added url is the same as we have in ServiceData file
import {useHistory} from 'react-router-dom';
// places data
import {PlacesData} from '../PlacesData';

import '../styles/PlaceDetails.css';

// import {ReactComponent as SwissFlag} from '../assets/svg/swiss-flag.svg';
import {ReactComponent as MountainsIcon} from '../assets/svg/mountains.svg';

const PlaceDetails = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [places, setPlaces] = useState(PlacesData);
    const [place, setPlace] = useState(null);

    useEffect(() => {
        const currentPlace = places.filter((place) => place.url === url);
        setPlace(currentPlace[0]);
    }, [places, url]); //dependencies, we want to execute this code always when places or url is updated

    return (
        <div className='place-details'>
        {place && (
             <div>
                <div className='place-details__header'>
                <img src={place.flag} alt='x' />
                    {/* <SwissFlag/> */}
                    <div>
        
                        <h1>{place.place}</h1>
                        <h2>{place.city}</h2>
                    </div>
                    <MountainsIcon/>
                </div>   

                <div className='place-details__description'>
                    <p>{place.description1}</p>
                    <img src={place.img1} alt='img' />
                </div>

                <div className='place-details__description'>
                    <iframe src={place.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    <p>{place.description2}</p>
                </div> 
                
                <div className='place-details__description'>
                    <p>{place.description3}</p>
                    <img src={place.img2} alt='img' />
                </div>
            </div>
         )}
        </div>
    )
};

export default PlaceDetails;